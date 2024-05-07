const express = require('express')
const app = express()
const path = require('path')

const router = require('./routes')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(router)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'public/views'))

app.listen(8000, () => { 
  console.log(`Server is running...`)
})
