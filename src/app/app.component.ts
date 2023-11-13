import { Component } from '@angular/core';
import { Quarto } from 'src/Models/Quarto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReservaHotel';
cliente={nome:''};
tipoCliente ='normal';
quarto!:Quarto;
tipoQuarto='simples';
quantidadeDidas!:number;

ngOnInit(){

}
reserva():void{
console.log(this.cliente.nome,this.tipoCliente,this.tipoQuarto,this.quantidadeDidas)
}
}

