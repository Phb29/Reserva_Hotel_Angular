import { Cliente } from "./Cliente.Interface";

export abstract class ClienteAbstract implements Cliente {

    constructor( public nome: string, public tipo: string) { }

     mensagemParabens(): string {
        return '';
    }
}