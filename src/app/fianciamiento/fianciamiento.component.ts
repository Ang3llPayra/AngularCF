import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FianciamientoService } from '../fianciamiento.service';

@Component({
  selector: 'app-fianciamiento',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './fianciamiento.component.html',
  styleUrl: './fianciamiento.component.css'
})
export class FianciamientoComponent implements OnInit {
  mensualidad: number = 0;
  restante: number = 0;
  meses: number = 12;
  comision: number = 2;
  tasaAnual: number = 14.5;
  tasaMensual:number = 0;
  pim: number = 0;  //Potencia del interes mensual
  interesMensual: number = 0;
  totalMensualidad: number = 0;
  ivaInteres: number = 0;
  dividiendo: number = 0;

  constructor(private fianciamientoService: FianciamientoService) {}

  ngOnInit() {
    this.fianciamientoService.restante$.subscribe((valor) => {
      this.restante = valor;
      this.calcularMensualidad();
    });
  }
  calcularMensualidad() {
	const años = this.meses / 12;
	this.tasaMensual = this.tasaAnual / 12 / 100;
	this.pim = (1+ this.tasaMensual) ** this.meses;
	this.interesMensual = this.restante * this.tasaMensual;
	this.ivaInteres = this.interesMensual * 0.16;
	this.dividiendo = this.interesMensual * this.pim;
	const divisor = this.pim - 1;

    this.mensualidad = this.dividiendo / divisor;
    this.totalMensualidad = this.mensualidad + this.ivaInteres;

    console.info("---------------");
    console.info("meses: " + this.meses); 
    console.info("interes mensual: " + this.interesMensual); 
    console.info("iva interes: " + this.ivaInteres); 
    console.info("potencial: " + this.pim);
    console.info("Mensualidad operacion: " + this.dividiendo +"/"+ divisor + "= " + this.mensualidad);
    console.info("Mensualidad fomula en log: " + (this.dividiendo / divisor));
    console.info("Mensualidad variable: " + this.mensualidad);
    console.info("Mensualidad total: " + this.mensualidad + "+" + this.ivaInteres + "= " + this.totalMensualidad);
    console.info("Mensualidad totoal formula en log: " + (this.mensualidad + this.ivaInteres));
    console.info("Mensualidad total variable: " + this.totalMensualidad);
    
    this.fianciamientoService.actualizarMeses(this.meses);
    this.fianciamientoService.actualizarMensualidad(this.totalMensualidad);
  }

  SeleccionMensualiad(event: any) {
    this.calcularMensualidad();
  }
}
