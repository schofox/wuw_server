'use strict';

var mongoose = require('mongoose');
var utils = require('../wuw_utils');

// create mongodb schema for our deadlines
var DeadlineSchema = new mongoose.Schema({
    info: String,
    deadline: Date, // this is the 'Abgabetermin' <- lol! :D
    shortLectureName: String,
    group: {
        groupName: String,
        lectureName: String
    },
    createdBy: String
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

DeadlineSchema.virtual('color').get(function () {
    return utils.stringToColor(this.group.lectureName);
});

// create model from our schema & export it
module.exports = mongoose.model('Deadline', DeadlineSchema, 'deadlines');
