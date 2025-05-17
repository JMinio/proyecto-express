const express = require ('express');
const app = express();

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended: false})) //para que express pueda entender los datos de un formulario

app.post('/user', (req,res) => {
    console.log(req.body)
    res.send('Usuario nuevo creado')
})

app.listen(3000)
console.log(`Server on port ${3000}`)