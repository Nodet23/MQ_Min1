var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Student = mongoose.model('Student');

var subject = mongoose.Schema({
    name: String,
    studentId: [{type:Schema.ObjectId, ref: 'Student'}],
    studies: String,
    quadri: String
},{collection:'subjects'});

module.exports=mongoose.model('Subject', subject);