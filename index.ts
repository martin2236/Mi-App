import * as minimist from "minimist"
import * as lodash from "lodash"
import { MenuController } from "./controllers";

function parcearParams(argv){
const resultado = minimist(argv)
return resultado;
}
function objetos (control ,params){
 
    //regresa los ids
 const id = params.id.map((item: any)=>{
       return {id:item}
   })
   //regresa las cantidades
  const cantidad = params.cantidad.map((item:any)=>{
      return {cantidad:item}
  }) 
  //une las cantidades
var listaUnida = lodash.merge(id,cantidad)

var resultado = []

var pedidos = lodash.forEach(listaUnida, (item)=>{
 return control.get(item).then((res)=>{
 console.log(res)     //esto es lo que quisiera que devuelva la variable resultado 
})                    // pero devuelve una lista vacia
})


return resultado

}


function main(){
const params = parcearParams(process.argv.slice(2))
const control = new MenuController()
const funcion = objetos(control, params)
console.log(funcion)
}

main()

//esta "app" esta pensada para funcionar con los siguientes parametros en la consola
//primero indicar que mesa es ej: mesa1
//Segundo indicar que plato se quiere pedir por medio de un id ej: --id=1
//Tercero indicar la cantidad deseada del plato ej: --cantidad=3
//Al estar terminada la parte logica deberia funcionar con botones predeterminados en una pagina web para no
//dar margen a escribir opciones incorrectas

//atajo ej(copiar y pegar en la consola) mesa1 --id=1 --cantidad=2 --id=2 --cantidad=2