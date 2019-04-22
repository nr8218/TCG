const express = require('express')
const hbs = require('hbs')
const path = require('path')
const indexRouter = require('./routers/index')

const app = express()
const port = process.env.PORT || 5000

//Static files and HBS partial file paths
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

//app settings
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicDirectoryPath))
app.use(express.json())
app.use(indexRouter) 

app.listen(port, () => {
    console.log('Server is up and running on port ' + port + '.')
})