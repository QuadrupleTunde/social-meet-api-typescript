// DEPENDENCIES
import express from "express"
const locations = require('express').Router()
const db = require('../models')
const { Location, Event } = db

// FIND ALL LOCATIONS
locations.get('/', async (req:express.Request, res:express.Response) => {
    try {
        const foundLocations = await Location.findAll()
        res.status(200).json(foundLocations)
    } catch(err) {
        res.status(500).json(err)
    }
})

// FIND A SPECIFIC LOCATION
locations.get('/:name', async (req:express.Request, res:express.Response) => {
    try {
        const foundLocation = await Location.findOne({
            where: { location_name: req.params.name },
            include: {
                model: Event,
                as: "events"
            }
        })
        res.status(200).json(foundLocation)
    } catch(err) {
        res.status(500).json(err)
    }
})

// CREATE A NEW LOCATION
locations.post('/', async (req:express.Request, res:express.Response) => {
    try{
        const newLocation = await Location.create(req.body)
        res.status(200).json({
            message: 'Succesfully created a new location',
            data: newLocation
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// UPDATE A LOCATION
locations.put('/:name', async (req:express.Request, res:express.Response) => {
    try {
        const updatedLocations = await Location.update(req.body, {
            where: {
                location_name: req.params.name
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedLocations} location(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A LOCATION
locations.delete('/:name', async(req:express.Request, res:express.Response) => {
    try {
        const deletedLocations = await Location.destroy({
            where: {
                location_name: req.params.name
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedLocations} location(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})
module.exports = locations
