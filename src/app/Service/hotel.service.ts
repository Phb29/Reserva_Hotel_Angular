import { Injectable } from '@angular/core';
import { Cliente } from 'src/Models/Cliente.Interface';
import { Quarto } from 'src/Models/Quarto';
import { Reserva } from 'src/Models/Reserva';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private cliente!: Cliente;
  private quarto!: Quarto;
  private reservas: Reserva[] = [];
  constructor() { }

  setCliente(cliente: any) {
    this.cliente = this.cliente;
  }
  getCliente(): Cliente {
    return this.cliente;
  }

  setQuarto(quarto: any) {
    this.quarto = quarto
  }
  getQuarto(): Quarto {
    return this.quarto;
  }

  addReserva(reserva: Reserva) {
    this.reservas.push(reserva)
  }

  getReserva(): Reserva[] {
    return this.reservas
  }
}
