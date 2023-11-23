const fs = require('node:fs')


//Funcion para obtener el maximo y minimos valores
const max_min = (texto) => {
  const pattern = /\d+/g
  const value = texto.match(pattern)
  let [min , max] = [...value]
  return [parseInt(min) , parseInt(max)]
}

const characters = (texto) => {
  const pattern = /[a-zA-Z]/g
  const value = texto.match(pattern)
  return value
}

const clavesInvalidas = (texto , claves_invalidas) => {
  let [min , max] = max_min(texto)
  const array_values =  characters(texto)
  const char = array_values[0]
  array_values.splice(0,1)
  let count = 0
  let str = ''
  array_values.forEach(e => {
    if(e === char) count++
    str = str + e
  })
  
  if(!(count >= min && count <= max)) claves_invalidas.push(str)
}
//Funcion que leera el archivo.
const leerArchivo = () => {
  const text = fs.readFileSync('./encryption_policies.txt' ,'utf-8')
  const datosArray = text.split('\n')
  return datosArray
}

const main = () => {
  let claves_invalidas = []
  const datos_array = leerArchivo();
  datos_array.forEach(element => {
    clavesInvalidas(element,claves_invalidas)
  });
  console.log('Clave invalida numero 42: ' , claves_invalidas[12])  
}

main()


