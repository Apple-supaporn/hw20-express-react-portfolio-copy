require('dotenv').config()

//IMPORT DEPENDENCIES
const express = require('express')
const cors = require("cors")

//create app object
const app = express()

//pull PORT from .env
const {PORT} = process.env

//import JSON files
const project = require("./projects.json")
const about = require("./about.json")

//MIDDLEWARE
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())


//ROUTES
//Home route for testing app
app.get("/", (req, res) => {
    res.send("Hello Apple")
})

//route for 'projects'
app.get("/projects", (req, res) => {
    res.json(project)
})

//route for 'about'
app.get("/about", (req, res) => {
    res.json(about)
})




//Turn on the server listener
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))

