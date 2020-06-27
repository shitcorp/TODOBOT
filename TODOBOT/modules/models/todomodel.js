const mongoose = require('mongoose');
const todoschema = new mongoose.Schema({
    _id: String,
    guildid: String,
    title: String,
    content: String,
    attachlink: String,
    submittedby: String,
    timestamp: String,
    state: String,
    todomsg: String,
    assigned: String,
    category: String
})

const todomodel = new mongoose.model("todos", todoschema)

module.exports = { todomodel };