import * as minimist from "minimist"
import * as lodash from "lodash"
import { MenuController } from "./controllers";

function parcearParams(argv){
const resultado = minimist(argv)
return resultado;
}
function objetos (control ,params){
 
    
 const id = params.id.map((item: any)=>{
       return {id:item}
   })
  const cantidad = params.cantidad.map((item:any)=>{
      return {cantidad:item}
  }) 

var listaUnida = lodash.merge(id,cantidad)
var pedidos = lodash.forEach(listaUnida, (item)=>{
 return control.get(item).then((res)=>{
  console.log(res)
})
})

return pedidos

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