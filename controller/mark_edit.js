var Marklist = require('../model/Mark');
var Type = require('../model/Type');

//便签编辑显示
exports.ShowMarkEdit = (req,res,next) => {
    var id = req.query.id;
    Marklist.findById(id).populate('name','name').then(function (doc) {
        Type.find().then((docs) => {
        if(doc && docs) {
            res.render('markedit',{
            info: doc,
            type: docs
            });
        }
        })
    })
}

//便签编辑操作
exports.MarkEditSet = (req,res,next) => {
    var id = req.body.id,
    title = req.body.title,
    content = req.body.content,
    name = req.body.type;
    var data = {
        title:title,
        content:content,
        name:name
    };
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
}