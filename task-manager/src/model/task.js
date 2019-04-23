const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const taskSchema = Schema({
  taskname: {type: String, required: true},
  description: String,
  completed: {type:Boolean, default: false}
})

const Task = mongoose.model('Task',taskSchema)

module.exports = Task
