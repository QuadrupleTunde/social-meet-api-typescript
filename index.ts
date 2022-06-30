// DEPENDENCIES
import express from "express"
require("dotenv").config();
const app = express();
const cors = require("cors");

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// ROOT
app.get('/', (req:express.Request, res:express.Response) => {
    res.status(200).json({
        message: 'Welcome to the Social Meet Up'
    })
})

// // CONTROLLERS 
const eventsController = require('./controllers/events_controller')
app.use('/events', eventsController);

const locationsController = require('./controllers/locations_controller')
app.use('/locations', locationsController)

const hobbiesController = require('./controllers/hobbies_controller')
app.use('/hobbies', hobbiesController)


// LISTEN
const port = process.env.PORT || 3001
app.listen(port, ()=>{
    console.log(`🎸I am listening at ${port}`)
})
