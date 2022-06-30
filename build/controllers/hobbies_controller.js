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
const hobbies = require('express').Router();
const db = require('../models');
const { Hobby, Event } = db;
// FIND ALL HOBBIES
hobbies.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundHobbies = yield Hobby.findAll();
        res.status(200).json(foundHobbies);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
// FIND A SPECIFIC HOBBY
hobbies.get('/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundHobby = yield Hobby.findOne({
            where: { hobby_name: req.params.name },
            include: {
                model: Event,
                as: "events"
            }
        });
        res.status(200).json(foundHobby);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
// CREATE A NEW HOBBY
hobbies.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newHobby = yield Hobby.create(req.body);
        res.status(200).json({
            message: 'Successfully created a new hobby.',
            data: newHobby
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
// UPDATE A HOBBY
hobbies.put('/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedHobbies = yield Hobby.update(req.body, {
            where: {
                hobby_name: req.params.name
            }
        });
        res.status(200).json({
            message: `Successfully updated ${updatedHobbies} hobby/hobbies`
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
// DELETE A HOBBY
hobbies.delete('/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedHobbies = yield Hobby.destroy({
            where: {
                hobby_name: req.params.name
            }
        });
        res.status(200).json({
            message: `Successfully deleted ${deletedHobbies} hobby/hobbies`
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
// GET HOBBIES IN SPECIFIC CATEGORY
hobbies.get('/category/:category', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hobbies = yield Hobby.findAll({
            where: {
                hobby_category: req.params.category
            }
        });
        res.status(200).json(hobbies);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
module.exports = hobbies;
