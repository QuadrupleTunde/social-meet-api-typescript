"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// DEPENDENCIES
const express_1 = __importDefault(require("express"));
require("dotenv").config();
const app = (0, express_1.default)();
const cors = require("cors");
// MIDDLEWARE
app.use(cors());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Social Meet Up'
    });
});
// // CONTROLLERS 
const eventsController = require('./controllers/events_controller');
app.use('/events', eventsController);
const locationsController = require('./controllers/locations_controller');
app.use('/locations', locationsController);
const hobbiesController = require('./controllers/hobbies_controller');
app.use('/hobbies', hobbiesController);
// LISTEN
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`🎸I am listening at ${port}`);
});
