var Type = require('../model/Type');

//分类编辑显示
exports.showTypeEdit = (req,res,next) => {
    var id = req.query.id;
    Type.findById(id,function(err,doc){
      if(doc) {
        res.render('typeedit',{
          name: doc.name,
          id: doc._id
        });
      }
    })
}

//分类编辑操作
exports.TypeEditSet = (req,res,next) => {
    var id = req.body.id,
        name = req.body.name,
        old = req.body.old;
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
        Type.updateOne({name:old},{$set:{name:name}}).then((doc)=>{
          if(doc) {
            res.json({
              msg: 'find_succ',
              code: 200,
              data: {
                info: '分类编辑成功！'
              }
            })
          }
        })
      }
    })
}