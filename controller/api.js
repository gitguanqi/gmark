// 这里是所有的接口
var Marklist = require('../model/Mark');
var Type = require('../model/Type');

// 获取所有的便签
exports.getAllMark = (req,res,next) => {
    var token = req.query.token;
    var page = req.query.page;
    var author = req.query.author || 'admin';
    var pagesize = 5;
    var current = page || 1;
    if(token) {
        Marklist.find({author:author}).skip((current-1)*pagesize).limit(pagesize).populate('name','name').then(docs => {
            if (!docs) { 
                res.json({
                    msg: 'get_fali',
                    code: 404,
                    data: {
                      info: 'No data！'
                    }
                })
            } else {
                Marklist.find({author:author}).countDocuments().then(num => {
                    res.json({
                        msg: 'get_succ',
                        code: 200,
                        data: {
                            info: '获取成功！',
                            list: docs,
                            count: num,
                            current: current-1,
                            allpage: Math.ceil(num/pagesize)
                        }
                    })
                })
            }
        })
    }else{
        res.json({
            msg: 'get_fali',
            code: 304,
            data: {
              info: 'No authorization！'
            }
        })
    }
}

//查看便签
exports.LookAllMark = (req,res,next) => {
    var token = req.query.token;
    var id = req.query.id;
    if(token) {
        Marklist.findById({_id:id}).populate('name','name').then(doc => {
            if(doc) {
                res.json({
                    msg: 'get_succ',
                    code: 200,
                    data: {
                        info: '获取成功！',
                        list: doc
                    }
                })
            }
        })
    }else{
        res.json({
            msg: 'get_fali',
            code: 304,
            data: {
              info: 'No authorization！'
            }
        })
    }
}

//添加便签
exports.AddMark = (req,res,next) => {
    var token = req.query.token;
    var title = req.body.title,
    name = req.body.name,
    author = req.body.author,
    content = req.body.content;
    var data = {
        title:title,
        name:name,
        author:author,
        content:content
    }
    if(!data.title) {
        res.json({
            msg: 'add_fail',
            code: 109,
            data: {
                info: '请输入标签类型！'
            }
        })
        return false;
    }
    if (!data.name) {
        res.json({
            msg: 'add_fail',
            code: 109,
            data: {
                info: '请输入标签类型！'
            }
        })
        return false;
    }
    if (!data.author) {
        res.json({
            msg: 'add_fail',
            code: 109,
            data: {
                info: '请输入标签作者！'
            }
        })
    }
    if (!data.content) {
        res.json({
            msg: 'add_fail',
            code: 109,
            data: {
                info: '请输入标签内容！'
            }
        })
        return false;
    }
    if(token) {
        Marklist.findOne({title:title},function(err,doc) {
            if(doc) {
                res.json({
                    msg: 'add_fail',
                    code: 109,
                    data: {
                        info: '便签已存在！'
                    }
                })
            }else {
                Marklist.create(data).then((doc)=>{
                    if(doc) {
                        res.json({
                            msg: 'add_succ',
                            code: 200,
                            data: {
                                info: '便签添加成功！'
                            }
                        })
                    }
                });
            }
        })
    }else{
        res.json({
            msg: 'get_fali',
            code: 304,
            data: {
              info: 'No authorization！'
            }
        })
    }
}

// 编辑便签
exports.EditMark = (req,res,next) => {
    var token = req.query.token;
    var id = req.body.id,
    title = req.body.title,
    name = req.body.name,
    author = req.body.author,
    content = req.body.content;
    var data = {
        title:title,
        name: name,
        author:author,
        content:content
    }
    if(!id) {
        res.json({
            msg: 'add_fail',
            code: 109,
            data: {
                info: '请输入标签id！'
            }
        })
        return false;
    }
    if(!data.title) {
        res.json({
            msg: 'add_fail',
            code: 109,
            data: {
                info: '请输入标签类型！'
            }
        })
        return false;
    }
    if (!data.name) {
        res.json({
            msg: 'add_fail',
            code: 109,
            data: {
                info: '请输入标签类型！'
            }
        })
        return false;
    }
    if (!data.author) {
        res.json({
            msg: 'add_fail',
            code: 109,
            data: {
                info: '请输入标签作者！'
            }
        })
    }
    if (!data.content) {
        res.json({
            msg: 'add_fail',
            code: 109,
            data: {
                info: '请输入标签内容！'
            }
        })
        return false;
    }
    if(token) {
        Marklist.updateOne({_id: id},data).then( doc => {
            if(doc) {
                res.json({
                    msg: 'find_succ',
                    code: 200,
                    data: {
                        info: '编辑成功！'
                    }
                })
            }
        })
    }else{
        res.json({
            msg: 'get_fali',
            code: 304,
            data: {
              info: 'No authorization！'
            }
        })
    }
}

//删除便签
exports.delMark = (req,res,next) => {
    var token = req.query.token;
    var id = req.query.id;
    if(!id) {
        res.json({
            msg: 'del_fail',
            code: 200,
            data: {
                info: '标签id不能为空！'
            }
        })
        return false;
    }
    if(token) {
        Marklist.deleteOne({_id:id}).then((doc)=>{
            if(doc) {
                res.json({
                    msg: 'get_succ',
                    code: 200,
                    data: {
                        info: '删除成功！'
                    }
                })
            }
        })
    }else{
        res.json({
            msg: 'get_fali',
            code: 304,
            data: {
              info: 'No authorization！'
            }
        })
    }
}

// 获取类型
exports.getType = (req,res,next) => {
    var token = req.query.token;
    if(token) {
        Type.find({}).then(docs => {
            if(docs) {
                res.json({
                    msg: 'get_succ',
                    code: 200,
                    data: {
                        info: '获取成功！',
                        list: docs
                    }
                })
            }
        })
    }else{
        res.json({
            msg: 'get_fali',
            code: 304,
            data: {
            info: 'No authorization！'
            }
        })
    }
}

// 搜索便签
exports.searchMark = (req,res,next) => {
    var page = req.query.page;
    var author = req.query.author;
    var current;
    var pagesize = 5;
    if(page) {
        current = page;
    }else{
        current = 1;
    }
    var key = req.query.key;
    const reg = new RegExp(key, 'i');
    var token = req.query.token;
    if(token) {
        Marklist.find({title:{$regex:reg},author: author}).skip((current-1)*pagesize).limit(pagesize).populate('name','name').then(docs => {
            Marklist.countDocuments({title:{$regex:reg},author:author}).then(num => {
                res.json({
                    msg: 'get_succ',
                    code: 200,
                    data: {
                        info: '获取成功！',
                        list: docs,
                        count: num,
                        key: key,
                        current: current-1,
                        allpage: Math.ceil(num/pagesize)
                    }
                });
            })
        })
    }else{
        res.json({
            msg: 'get_fali',
            code: 304,
            data: {
            info: 'No authorization！'
            }
        })
    }
}