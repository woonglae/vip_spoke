const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    // need to match filename in the views folder and the string in res.render() 
    res.render('index', {
        title: 'Weather App',
        name: 'Ray'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Ray'
    })
    
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpMessage: 'Welcome to help page',
        title: 'Help',
        name: 'Ray'
    })
})


// app.com/weather
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Partly Cloud',
        location: 'Atlanta'
    })
})


// send 404 for subdivision of help page
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Ray',
        errorMessage: 'Help is not found'

    })
})
    
// send 404 for rest of homepages
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Ray',
        errorMessage: 'Page is not found'
    })
})    


app.listen(3000, () => {
    console.log('Server is up on port 3000')
})