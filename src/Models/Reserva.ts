import { Cliente } from "./Cliente.Interface";
import { IQuarto } from "./Quarto.Interface";

export class Reserva{
constructor(public cliente:Cliente,public quarto:IQuarto, public quantidadeDias:number){

}
public valorTotal():number{
return this.quarto.valor * this.quantidadeDias
}

get detalheReserva():string{
return `Reserva feita por ${this.cliente.nome} para um quarto ${this.quarto.tipo} por ${this.quantidadeDias} dias. ${this.cliente.mensagemParabens()}
valor total  ${this.valorTotal()}`
}
}