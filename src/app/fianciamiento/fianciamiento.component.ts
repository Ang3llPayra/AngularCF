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
  m12 = false;
  m24 = false;
  m36 = false;
  m48 = false;

  constructor(private fianciamientoService: FianciamientoService) {}

  ngOnInit() {
    this.fianciamientoService.restante$.subscribe((valor) => {
      this.restante = valor;
      this.calcularMensualidad();
    });
  }
  calcularMensualidad() {
    if (this.meses > 0) {
      this.mensualidad = this.restante / this.meses;
    }
    this.fianciamientoService.actualizarMeses(this.meses);
    this.fianciamientoService.actualizarMensualidad(this.mensualidad);
  }

  SeleccionMensualiad(event: any) {
    this.calcularMensualidad();
  }

  // SelecionMensualiad(event: Event)
  // {
  //   // if (this.mensualidad == 12){
  //   //   this.m12 = true;
  //   //   this.m24 = false;
  //   //   this.m36 = false;
  //   //   this.m48 = false;
  //   // }
  //   // if (this.mensualidad == 24){
  //   //   this.m12 = false;
  //   //   this.m24 = true;
  //   //   this.m36 = false;
  //   //   this.m48 = false;
  //   // }

  //   // if (this.mensualidad == 36){
  //   //   this.m12 = false;
  //   //   this.m24 = false;
  //   //   this.m36 = true;
  //   //   this.m48 = false;
  //   // }

  //   // if (this.mensualidad == 48){
  //   //   this.m12 = false;
  //   //   this.m24 = false;
  //   //   this.m36 = false;
  //   //   this.m48 = true;
  //   // }
  // }

}
