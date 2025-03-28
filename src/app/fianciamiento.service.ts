import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FianciamientoService {
  private restanteSubject = new BehaviorSubject<number>(0);
  restante$ = this.restanteSubject.asObservable();

  private precioSeleccionadoSubject = new BehaviorSubject<number>(0); // 🔥 Nuevo Subject para el precio
  precioSeleccionado$ = this.precioSeleccionadoSubject.asObservable(); // 🔥 Observable para suscribirse

  private precioEngancheSubject = new BehaviorSubject<number>(0);
  precioEnganche$ = this.precioEngancheSubject.asObservable();

  private mesesSubject = new BehaviorSubject<number>(0);
  meses$ = this.mesesSubject.asObservable();

  private mensualidadSubject = new BehaviorSubject<number>(0);
  mensualidad$ = this.mensualidadSubject.asObservable();

  private medeloSubject = new BehaviorSubject<string>("");
  modelo$ = this.medeloSubject.asObservable();


  actualizarRestante(valor: number)
  {
  // Convierte el string a número quitando "$" y ","
  this.restanteSubject.next(valor);
  }

  actualizarPrecioSeleccionado(precio: number) 
  { // 🔥 Nueva función para actualizar el precio seleccionado
    this.precioSeleccionadoSubject.next(precio);
  }

  actulizarPrecioEnganche(precio:number)
  {
    this.precioEngancheSubject.next(precio);
  }

  actualizarMeses(plazo:number)
  {
    this.mesesSubject.next(plazo);
  }

  actualizarMensualidad(mensualidad:number)
  {
    this.mensualidadSubject.next(mensualidad);
  }

  actualizarModelo(modelo:string)
  {
    this.medeloSubject.next(modelo);
  }

}
