const fs = require('node:fs')

const leerArchivo = () => {
  const text = fs.readFileSync('./message_02.txt' ,'utf-8')
  return text
}

const compilador = (value = 0) => {
  let value2 = " "
  texto = leerArchivo()
  for(let i  = 0 ; i < texto.length ; i++){
    switch(texto[i]){
      case '#' : value = value + 1
        break
      case '@' : value = value - 1
        break
      case '\*' : value = value * value
        break
      case '&' : 
        value2 = value2 + value.toString()
        if(i === texto.length - 1)  console.log(value2)
        break
    }
  }
}

compilador()