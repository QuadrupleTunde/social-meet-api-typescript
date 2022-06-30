// DEPENDENCIES
import express from "express"
const events = require('express').Router();
const db = require('../models')
const { Event, Hobby, Location } = db


// FIND ALL EVENTS
events.get('/', async (req:express.Request, res:express.Response) => {
    try {
        const foundEvents = await Event.findAll({
            include: [
                {
                    model: Hobby,
                    as: "hobbies"
                },
                {
                    model: Location,
                    as: "locations"
                }
            ]
        })
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC EVENT
events.get('/:name', async(req:express.Request, res:express.Response) => {
    try {
        const foundEvent = await Event.findOne({
            where: { event_name:req.params.name },
            include: [
                {
                    model: Hobby,
                    as: "hobbies"
                },
                {
                    model: Location,
                    as: "locations"
                }
            ]
        })
        res.status(200).json(foundEvent)
    }
    catch (error) {
        res.status(500).json(error)
    }
})    
// CREATE A NEW EVENT
events.post('/', async (req:express.Request, res:express.Response) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new event',
            data: newEvent
        })
    } catch(err) {
        res.status(500).json(err)
    }
})
    


// UPDATE AN EVENT
events.put('/:name', async (req:express.Request, res:express.Response) => {
    try {
        const updatedEvents = await Event.update(req.body, {
            where: {
                event_name: req.params.name
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedEvents} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE AN EVENT
events.delete('/:name', async (req:express.Request, res:express.Response) => {
    try {
        const deletedEvents = await Event.destroy({
            where: {
                event_name: req.params.name
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEvents} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports = events
