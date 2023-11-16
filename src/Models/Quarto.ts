import { IQuarto } from "./Quarto.Interface";

export abstract class Quarto implements IQuarto{

constructor(public tipo:string,public valor:number){

}
 
}