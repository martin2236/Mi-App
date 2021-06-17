import * as lodash from "lodash"


function get(lista:any[]){
    console.log("perra")
var resultado = lodash.forEach(lista,(item)=>{
 return item.id +1
 })

return resultado
}

function main(){
const pedidoDos = [{id:1,cantidad:4},{id:3,cantidad:4},{id:13,cantidad:4},{id:18,cantidad:4}]
const resultado = get(pedidoDos)
console.log(resultado)
}

main()

