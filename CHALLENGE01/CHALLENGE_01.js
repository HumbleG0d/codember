const fs = require('node:fs')

//Funcion que nos imprimira el patron requerido
const busquedaPatron = (texto) => {
  //Convertimos el texto a minusculas , y luego separamos los animales.
  const new_text = texto.toLowerCase().split(" ")
  
  //Eliminamos los elementos repetidos de nuestro array new_text
  const set_text = new Set(new_text)

  //Contamos los elementos repeditos y ademas imprimimos las solucion
  let resultado = ""
  for(let j of set_text){
    let contador = 0;
    for(let i = 0 ; i < new_text.length ; i++){
      if(j === new_text[i]) contador++;
    }
    resultado = resultado + (j + contador);     
  }
  console.log(resultado)
}

//Funcion que leera el archivo.
const leerArchivo = () => {
  const text = fs.readFileSync('./message_01.txt' ,'utf-8')
  return text
}

const texto = leerArchivo()
busquedaPatron(texto)
