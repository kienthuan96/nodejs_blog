const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const course = new Schema({
    name: {type: String, default: ''},
    descripton: {type: String, default: ''},
    image: {type: String, default: ''},
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now}
  });

module.exports = mongoose.model('course', course);