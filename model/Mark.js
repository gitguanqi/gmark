/**
 * 文章添加 model
 * @type {*}
 */
const mongoose = require('mongoose')

const MarkSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    name: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Type'
    },
    create_time: {
       type: Date,
       default: Date.now
    },
    update_time: {
        type: Date,
        default: Date.now
    }
})

const MarkModel = mongoose.model('Mark',MarkSchema)

module.exports = MarkModel