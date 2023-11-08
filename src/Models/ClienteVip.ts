import { ClienteAbstract } from "./Cliente";

export class ClienteVip extends ClienteAbstract{
constructor(nome:string,tipo:string){
super(nome,tipo)
}
 override mensagemParabens(): string {
    return `Olá ${this.nome}, parabéns por ser um cliente VIP!` 
}
}
