const express =  require('express')
const routes = require('./routes/routes')
const conectar = require('./config/dbConfig')

const app = express()
const port = 3333

app.use(express.json())
app.use(routes)

app.listen(port, ()=>{
    conectar
    console.log('App rodando')
})



