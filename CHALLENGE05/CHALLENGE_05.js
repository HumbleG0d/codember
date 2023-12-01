const fs = require('node:fs')

const leerArchivo = () => {
  const text = fs.readFileSync('./database_attacked.txt' ,'utf-8')
  const datosArray = text.split('\n').filter(linea => linea.trim() !== '')
  return datosArray
}

const valid_id = (id) => {
  const alfanumerico = /^[a-zA-Z0-9]+$/;
  return id.match(alfanumerico)
}

const valid_username = (username) => {
  const alfanumerico = /^[a-zA-Z0-9]+$/;
  return username.match(alfanumerico)
}

const valid_email = (email) => {
  const emailChecker = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return email.match(emailChecker)  
}

const valid_age = (age) => {
  const ageCheker = /[0-9]/
  return age.match(ageCheker)
}

const valid_location = (location) => {
  const nameCheker = /[a-zA-Z]/
  const val = location === '' ? true : location.match(nameCheker)
  return val
}


const array_datos = leerArchivo()

let message = ''

array_datos.forEach(element => {
  const [id , username , email , age , location] = element.split(',')
  if(!(valid_id(id) && valid_username(username) && valid_email(email) && valid_age(age) && valid_location(location))){
    message = message + username[0]
  }
})

console.log(message)






