import { error } from "console"
import * as jsonfile from "jsonfile"
import { dirname } from "path/posix"

class Productos{
constructor(){
}
tipo:string
id:number
nombre:string
cantidad:number
precio:number
}


class Pedido{
platos:Productos[]    

getAll() {
    const menu = jsonfile.readFile("./platos.json").then((platos) => {
        return platos;
      })
  return menu
}                       //devuelve todo el json

getId(objeto){

return this.getAll().then((item)=>{
  const plato =  item.find((plato)=>{
        return  plato.id == objeto.id
      
    })                                              
    plato.cantidad = objeto.cantidad                    // agrega la cantidad de objetos pedidos
    plato.precio = plato.precio * plato.cantidad        // multiplica el precio de los platos por la cantidad    
    return plato
}).catch((error)=>{
    return error
})

}
}


export {Productos,Pedido}







