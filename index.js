const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! Baptista')
})

app.listen(process.env.port || port, () => {
  console.log(`Servidor rodando... ${port}`)
})