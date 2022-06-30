"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const events = require('express').Router();
const db = require('../models');
const { Event, Hobby, Location } = db;
// FIND ALL EVENTS
events.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundEvents = yield Event.findAll({
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
        });
        res.status(200).json(foundEvents);
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
// FIND A SPECIFIC EVENT
events.get('/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundEvent = yield Event.findOne({
            where: { event_name: req.params.name },
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
        });
        res.status(200).json(foundEvent);
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
// CREATE A NEW EVENT
events.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newEvent = yield Event.create(req.body);
        res.status(200).json({
            message: 'Successfully inserted a new event',
            data: newEvent
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
// UPDATE AN EVENT
events.put('/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedEvents = yield Event.update(req.body, {
            where: {
                event_name: req.params.name
            }
        });
        res.status(200).json({
            message: `Successfully updated ${updatedEvents} event(s)`
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
// DELETE AN EVENT
events.delete('/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedEvents = yield Event.destroy({
            where: {
                event_name: req.params.name
            }
        });
        res.status(200).json({
            message: `Successfully deleted ${deletedEvents} event(s)`
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
module.exports = events;
