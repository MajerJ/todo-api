'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    task: {
        type: Object,
        required: 'Enter the name of the task'
    },
    date: {
        type: Date,
        default: Date.now
    },
    done: {
            type: Boolean,
            default: false
        },
});

module.exports = mongoose.model('Tasks', TaskSchema);