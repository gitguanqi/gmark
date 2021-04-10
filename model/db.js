/**
 * 用来连接数据库
 * */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mark',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function () {
    console.log('database connect succ!')
})

module.exports = db