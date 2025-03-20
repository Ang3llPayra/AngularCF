import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FianciamientoService } from '../fianciamiento.service';
import { ApiService } from '../servicios/api.service'; // Importar el servicio

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {
  datos: any;
  precioSeleccionado:number=0;
  precioEnganche:number=0;
  nombre:string="";
  phone:string="";
  mail:string="";
  plazo:number=0;
  mensualidad:number=0;
  modeloSeleccionado:string="";
  showInfo:boolean=false;
  
  constructor(
	  private financiamientoService: FianciamientoService,
	  private apiService: ApiService
  	) {}

  // traer variables
  ngOnInit(): void {
    this.financiamientoService.precioSeleccionado$.subscribe((precio) => {
      this.precioSeleccionado = precio; // 🔥 Se actualizará automáticamente cuando cambie en `app-calculador`
    });

    this.financiamientoService.precioEnganche$.subscribe((precio) =>{
      this.precioEnganche = precio;
    })

    this.financiamientoService.meses$.subscribe((plazo) =>{
      this.plazo = plazo;
    })

    this.financiamientoService.mensualidad$.subscribe((mensualidad)=>{
      this.mensualidad = mensualidad
    })
    
    this.financiamientoService.modelo$.subscribe((modelo)=>{
      this.modeloSeleccionado = modelo;
    })

    this.apiService.obtenerDatos().subscribe(response => {
	    this.datos = response;
	    console.log('Datos recibidos', this.datos);
    });
  }

  validarTelefono(event: Event) {
    let input = event.target as HTMLInputElement;
    let valor = input.value.replace(/\D/g, ""); // Elimina caracteres no numéricos
    // Si el usuario incluyó "+", lo respeta
    if (input.value.startsWith("+52")) {
      valor = "+52" + valor.substring(2, 12); // Mantiene "+52" y limita a 10 dígitos
    } else {
      valor = "+52" + valor.substring(0, 10); // Si no hay "+52", lo agrega
    }
  
    input.value = valor;
    this.phone = valor;
  }


  enviar() {
  	if (this.nombre === "" || this.phone === "" || this.mail === "") {
    	console.log("Necesitas agregar los datos necesarios");
  	} else {
    	// Datos a enviar a la API
    	const lead = {
      		nombre: this.nombre,
      		numero: this.phone,
      		correo: this.mail,
      		modelo: this.modeloSeleccionado,
      		precio: this.precioSeleccionado,
      		enganche: this.precioEnganche,
      		plazo: this.plazo,
      		mensualidad: this.mensualidad
    	};

    	// Enviar datos a la API
    	this.apiService.enviarDatos(lead).subscribe(
      		response => {
        	console.log("Datos enviados correctamente:", response);
		window.location.reload();
      	},
      	error => {
        	console.error("Error al enviar datos:", error);
      	}
      );
    }
  }
}
