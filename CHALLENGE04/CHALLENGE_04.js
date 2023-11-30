const fs = require('node:fs')

const leerArchivo = () => {
  const text = fs.readFileSync('./files_quarantine.txt' ,'utf-8')
  const datosArray = text.split('\n')
  return datosArray
}

const arrayDatos = leerArchivo()

let valid_arch = []

arrayDatos.forEach(element => {
  
  const [str1 , str2] = element.split('-')
  const str1_arr  = str1.split('')
  const set_str1 = new Set(str1_arr)
  const new_str1 = [...set_str1]
  let name_arch = ''
  for(let j = 0 ; j < new_str1.length ; j++){
    let count = 0;
    for(let i = 0 ; i < str1_arr.length ; i++){
      if(new_str1[j] === str1_arr[i]){
        count++
      }
    }
    if(count == 1){
      name_arch = name_arch + new_str1[j]
    }
  }
  if(name_arch === str2){
    valid_arch.push(element)
  }
});

console.log(valid_arch[32])

