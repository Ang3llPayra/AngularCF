import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FianciamientoComponent } from "../fianciamiento/fianciamiento.component";
import { FianciamientoService } from '../fianciamiento.service';
import { FormularioComponent } from "../formulario/formulario.component";
import { ExcelService } from '../service/excel.service';


@Component({
  selector: 'app-calculador',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FianciamientoComponent,
    FormularioComponent
],
  templateUrl: './calculador.component.html',
  styleUrl: './calculador.component.css'
})

export class CalculadorComponent {
  data: any[] = []; // Datos del Excel
  filteredModels: any[] = []; // Modelos filtrados por categoría
  selectedCategory: string = ''; // Categoría seleccionada
  constructor(private fianciamientoService: FianciamientoService, private ExcelService: ExcelService ) {}

  async ngOnInit(): Promise<void> {
    this.data = await this.ExcelService.readExcelFromAssets();
    console.log("Datos del Excel cargados:", this.data);
  }
  
  

  grupoVehiculo: string = "";
  atv = false;
  utv = false;
  ssv = false;
  youth = false;
  moto = false;
  show = true;
  showFormu = false;
  showEnganche = false;
  showFinan = false;

  modelo: string = "";
  modeloNombre: string = ""; // Nombre del modelo seleccionado
  precioSeleccionado: number = 0;

  enganche: number = 20 ;
  engancheCash: string = "$0";
  precioEnganche: number = 0;
  restante: number = 0;


  selectedVicle(event: any)
  {
    const categoria = event?.target?.value; // Validamos que `event.target.value` exista
    if (!categoria) return; // Si la categoría es `undefined`, no hace nada

    this.selectedCategory = categoria;
    this.filteredModels = this.data.filter(row => row.Tipo === this.selectedCategory); // Filtra modelos

    // 🔹 Imprimir en consola
    console.log("Categoría seleccionada:", this.selectedCategory);
    console.log("Modelos disponibles en esta categoría:", this.filteredModels);
  
    // Resetea todas las categorías
    this.atv = this.utv = this.ssv = this.youth = this.moto = false;
  
    // Activa solo la categoría seleccionada
    switch (this.selectedCategory) {
      case "ATV": this.atv = true; break;
      case "UTV": this.utv = true; break;
      case "SSV": this.ssv = true; break;
      case "YOUTH": this.youth = true; break;
      case "MOTO": this.moto = true; break;
    }
  }

  actualizarPrecio(event: any) { 
    const modeloID = event.target.value; // Captura el ID seleccionado
    const modeloSeleccionado = this.filteredModels.find(model => model.ID == modeloID);

    if (modeloSeleccionado) {
        this.precioSeleccionado = modeloSeleccionado.Precio; // Guarda el precio del modelo
        this.modelo = modeloID; // 📌 Asigna el modelo seleccionado
        this.modeloNombre = modeloSeleccionado.Modelo; // 📌 Guarda el nombre del modelo
    }

    console.log("Modelo seleccionado:", modeloSeleccionado?.Modelo);
    console.log("Precio seleccionado:", this.precioSeleccionado);

    this.show = false;

    // 📌 Nuevo cálculo del enganche y restante usando `this.precioSeleccionado`
    const precioTotal = this.precioSeleccionado || 0;
    this.precioEnganche = ((this.enganche / 100) * precioTotal);
    this.restante = precioTotal - (this.enganche / 100) * precioTotal;

    // Enviar valores al servicio
    this.fianciamientoService.actualizarRestante(this.restante);
}
  actualizarPorcentaje(event: any)
  {
    this.enganche = event.target.value;

    const precio = this.precioSeleccionado || 0; // 📌 Usar el precio dinámico del modelo seleccionado

    this.precioEnganche = ((this.enganche / 100) * precio);
    this.restante = (precio - (this.enganche / 100) * precio);
    this.fianciamientoService.actualizarPrecioSeleccionado(this.precioSeleccionado); // 🔥 Enviar al servicio
    this.fianciamientoService.actulizarPrecioEnganche(this.precioEnganche);
    this.fianciamientoService.actualizarRestante(this.restante);
    this.fianciamientoService.actualizarModelo(this.modeloNombre);
  }

  validarEnganche(event: Event) {
    let input = event.target as HTMLInputElement;
    let valor = input.value.replace(/\D/g, ""); // Solo números
  
    let numero = parseInt(valor, 10) || 0;
    input.value = `$${numero.toLocaleString("es-MX")}`; // Agrega formato de miles
    this.engancheCash = `$${numero.toLocaleString("es-MX")}`;

  }

  showFormulario(event: Event)
  {
    this.showFormu = true;
  }

  showFinanciamiento(event: Event) {
    this.showFinan = true;
  }

}
