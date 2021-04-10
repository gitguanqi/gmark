/**
 * api
 * @type {*}
 */
const mongoose = require('mongoose');

const ApiSchema = new mongoose.Schema({
    title: String,
    addr: String,
    params: String,
    methods: String,
    comment: String
})

const ApiModel = mongoose.model('Api',ApiSchema);

module.exports = ApiModel;