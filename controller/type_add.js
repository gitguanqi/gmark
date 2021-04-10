var Type = require('../model/Type');

//分类添加显示
exports.ShowTypeAdd = (req,res,next) => {
    res.render('typeadd');
}

//分类添加操作
exports.TypeAddSet = (req,res,next) => {
    var name = req.body.name;
    Type.findOne({name:name},function(err,doc) {
      if(doc) {
          res.json({
            msg: 'find_fali',
            code: 101,
            data: {
              info: '分类已存在！'
            }
          })
      }else {
        Type.create({name:name},function(err,doc) {
          if(doc) {
            res.json({
              msg: 'find_succ',
              code: 200,
              data: {
                info: '分类添加成功！'
              }
            })
          }
        })
      }
    })
}