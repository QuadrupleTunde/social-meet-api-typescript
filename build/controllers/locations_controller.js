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
const locations = require('express').Router();
const db = require('../models');
const { Location, Event } = db;
// FIND ALL LOCATIONS
locations.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundLocations = yield Location.findAll();
        res.status(200).json(foundLocations);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
// FIND A SPECIFIC LOCATION
locations.get('/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundLocation = yield Location.findOne({
            where: { location_name: req.params.name },
            include: {
                model: Event,
                as: "events"
            }
        });
        res.status(200).json(foundLocation);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
// CREATE A NEW LOCATION
locations.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newLocation = yield Location.create(req.body);
        res.status(200).json({
            message: 'Succesfully created a new location',
            data: newLocation
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
// UPDATE A LOCATION
locations.put('/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedLocations = yield Location.update(req.body, {
            where: {
                location_name: req.params.name
            }
        });
        res.status(200).json({
            message: `Successfully updated ${updatedLocations} location(s)`
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
// DELETE A LOCATION
locations.delete('/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedLocations = yield Location.destroy({
            where: {
                location_name: req.params.name
            }
        });
        res.status(200).json({
            message: `Successfully deleted ${deletedLocations} location(s)`
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
module.exports = locations;
