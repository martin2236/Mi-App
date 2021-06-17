import {Productos,Pedido} from "./models"
import * as lodash from "lodash"

class MenuController{
info:Productos[] = [];
pedidos:Pedido
constructor(){                                      // este es el controllers por ahora es algo basico pero le voy
    this.pedidos = new Pedido();                    // ir agregando funciones como agregar productos 
    this.pedidos.getAll();
}
get(lista:any){
return this.pedidos.getId(lista)
}

}

export {MenuController}

