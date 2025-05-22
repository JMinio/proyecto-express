const express = require ('express');
const app = express();

//REQUEST PARAMS
//SI QUEREMOS EXTRAER EL DATO QUE SEA TIPEADO EN ALGUNA URL 
//STRING
app.get('/hello/:user', (req,res) => {
    console.log(typeof req.params.user)
    console.log(req.params)
    res.send(`Hello ${req.params.user}`)
})
//SUMA
app.get('/suma/:x/:y', (req,res) => {
    //tenemos esta forma
    /* console.log(req.params.x)
    console.log(req.params.y)
    y esta sgte forma
    */
    const {x, y} = req.params;
    res.send(`El resultado es: ${parseInt(x) + parseInt(y)}`)
    console.log(`El resultado es: ${parseInt(x) + parseInt(y)}`);
})

//VALIDACION DE USUARIO PARA ENVIAR INFORMACION
app.get('/users/:user/photo', (req,res) => {
    if(req.params.user === "juli"){
        console.log('Usuario valido');
        return res.sendFile('./static/imagen.jpg',{ 
            root: __dirname
        })
    }
    /* El codigo sigue leyendo, por ende siempre va a tirar esta ultima linea.
    Corresponde colocar un Return en la primer respuesta en caso de que sea la correcta
    sino si saltar a esta ultima linea. */
    res.send('Usuario invalido') 
})

//otro ejemplo de parametros pero separados
app.get('/name/:name/age/:age', (req,res) => {
    res.send(`El usuario ${req.params.name} tiene ${req.params.age} años`)
})

//QUERIES
//URL -> http://localhost:3000/users?name=juli&lastname=mino
//Salida: name:juli, lastname:mino
app.get('/users', (req,res) => {
    console.log(req.query)
    console.log(req.query.name)
    console.log(req.query.lastname)
})

//VALIDACION DE QUERY
app.get('/search', (req,res) => {
    if(req.query.q === "javascript"){
        res.send("URL: Javascript")
    }else{
        res.send("La barra de busqueda esta vacia.")
    }

    /* Si en la url colocamos 2 variables iguales (?user=lucas&user=fabian) 
    Lo que da como resultado es un vector user con esos 2 valores.
    */
})

app.listen(3000)
console.log(`Server on port ${3000}`)