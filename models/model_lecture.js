'use strict';

var mongoose = require('mongoose');
var utils = require('../wuw_utils');

// create mongodb schema for our lectures
var LectureSchema = new mongoose.Schema({
    lectureName: String,
    rooms: [String],
    groups: [String],
    startTime: Date,
    endTime: Date,
    docents: [String]
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

LectureSchema.virtual('color').get(function () {
    return utils.stringToColor(this.lectureName);
});

// create model from our schema & export it
module.exports = mongoose.model('Lecture', LectureSchema, 'lectures');
