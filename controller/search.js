var Mark = require('../model/Mark');

// 显示搜索
const showSearch = (req,res,next) => {
    var page = req.query.page;
    var current;
    var pagesize = 5;
    if(page) {
        current = page;
    }else{
        current = 1;
    }
    var key = req.query.key;
    var origin = req.query.origin;
    var search;
    const reg = new RegExp(key, 'i');
    if(origin == 'mark') {
        search = {
            title: {$regex:reg}
        }
    }else{
        search = {
            author: {$regex:reg}
        }
    }
    Mark.find(search).skip((current-1)*pagesize).limit(pagesize).populate('name','name').then(docs => {
        Mark.countDocuments(search).then(num => {
            res.render('search',{
                list: docs,
                count: num,
                key: key,
                origin: origin,
                current: current-1,
                allpage: Math.ceil(num/pagesize)
            });
        })
    })
}

module.exports = showSearch;