import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FianciamientoService } from '../fianciamiento.service';

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
  precioSeleccionado:number=0;
  precioEnganche:number=0;
  nombre:string="";
  phone:string="";
  mail:string="";
  plazo:number=0;
  mensualidad:number=0;
  modeloSeleccionado:string="";
  showInfo:boolean=false;
  
  constructor(private financiamientoService: FianciamientoService) {}

  // traer variables
  ngOnInit() {
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


  enviar()
  {
    if(this.nombre == "" || this.phone == "" || this.mail == "")
    {
      console.log("Necesitas agregar los datos necesarios");
    }
    else
    {
        const contenido = `
        Nombre: ${this.nombre}
        Número: ${this.phone}
        Correo: ${this.mail}
        Modelo: ${this.modeloSeleccionado}
        Precio: ${this.precioSeleccionado.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}
        Enganche: ${this.precioEnganche.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}
        Plazo: ${this.plazo} meses
        Mensualidad: ${this.mensualidad.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}
      `;

      const blob = new Blob([contenido], { type: 'text/plain' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'datos_financiamiento.txt';
      a.click();
      URL.revokeObjectURL(a.href);
      window.location.reload();
    }
  }
}
