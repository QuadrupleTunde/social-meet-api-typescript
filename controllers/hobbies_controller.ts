// DEPENDENCIES
import express from "express"
const hobbies = require('express').Router();
const db = require('../models')
const { Hobby, Event } = db


// FIND ALL HOBBIES
hobbies.get('/', async (req:express.Request, res:express.Response) => {
    try {
        const foundHobbies = await Hobby.findAll()
        res.status(200).json(foundHobbies)
    } catch(err) {
        res.status(500).json(err)
    }
})

// FIND A SPECIFIC HOBBY
hobbies.get('/:name', async (req:express.Request, res:express.Response) => {
    try {
        const foundHobby = await Hobby.findOne({
            where: { hobby_name: req.params.name },
            include: {
                model: Event,
                as: "events"
            }
        })
        res.status(200).json(foundHobby)
    } catch(err) {
        res.status(500).json(err)
    }
})

// CREATE A NEW HOBBY
hobbies.post('/', async (req:express.Request, res:express.Response) => {
    try {
        const newHobby = await Hobby.create(req.body)
        res.status(200).json({
            message: 'Successfully created a new hobby.',
            data: newHobby
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A HOBBY
hobbies.put('/:name', async (req:express.Request, res:express.Response) => {
    try {
        const updatedHobbies = await Hobby.update(req.body, {
            where: {
                hobby_name: req.params.name
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedHobbies} hobby/hobbies`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A HOBBY
hobbies.delete('/:name', async (req:express.Request, res:express.Response) => {
    try {
        const deletedHobbies = await Hobby.destroy({
            where: {
                hobby_name: req.params.name
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedHobbies} hobby/hobbies`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// GET HOBBIES IN SPECIFIC CATEGORY
hobbies.get('/category/:category', async (req:express.Request, res:express.Response) => {
    try {
        const hobbies = await Hobby.findAll({
            where: {
                hobby_category: req.params.category
            }
        })
        res.status(200).json(hobbies)
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = hobbies
