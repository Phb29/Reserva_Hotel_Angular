import { Component } from '@angular/core';
import { Quarto } from 'src/Models/Quarto';
import { HotelService } from './Service/hotel.service';
import { ClienteNomrmal } from 'src/Models/ClienteNormal';
import { ClienteVip } from 'src/Models/ClienteVip';
import { QuartoComum } from 'src/Models/QuartoComum';
import { QuartoLuxo } from 'src/Models/QuartoLuxo';
import { Reserva } from 'src/Models/Reserva';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReservaHotel';
  cliente = {nome: ''};
  tipoCliente = 'normal';
  quarto!: Quarto;
  tipoQuarto = '';
  quantidadeDias!: number;
  constructor(public hotelService: HotelService) { }

  CriarCliente(): void {
    if (this.tipoCliente === 'normal') {
      this.cliente = new ClienteNomrmal(this.cliente.nome, 'Normal');
      this.tipoQuarto = 'simples'
    }
    else if (this.tipoCliente === 'vip') {
      this.cliente = new ClienteVip(this.cliente.nome, 'VIP');
      this.tipoQuarto = 'deluxo'
    }
    this.hotelService.setCliente(this.cliente);
 
  this.escolherQuarto();
    
  }
  ngOnInit() {

  }
  reserva(): void {
    this.CriarCliente(); 
    let cliente = this.hotelService.getCliente();
    let quarto = this.hotelService.getQuarto();
    let reserva = new Reserva(cliente, quarto, this.quantidadeDias);
    this.hotelService.addReserva(reserva);
}


  escolherQuarto(): void {
    if (this.tipoQuarto === 'simples') {
      this.quarto = new QuartoComum();
    }
    else if (this.tipoQuarto === 'deluxo') {
      this.quarto = new QuartoLuxo();
    }
    this.hotelService.setQuarto(this.quarto);
  }
}

