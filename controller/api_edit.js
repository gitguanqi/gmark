var Api = require('../model/Api');

exports.ShowEditApi = (req,res,next) => {
    var id = req.query.id;
    Api.findOne({_id:id}).then(doc => {
        if(doc) {
            res.render('apiedit',{
                res: doc,
                id: id
            });
        }
    })
};

exports.EditApi = (req,res,next) => {
    var id = req.body.id;
    var title = req.body.title;
    var addr = req.body.addr;
    var params = req.body.params;
    var methods = req.body.methods;
    var comment = req.body.comment;
    var data = {
      title: title,
      addr: addr,
      params: params,
      methods: methods,
      comment: comment
    }
    Api.updateOne({_id:id},data,function(err,doc) {
      if(doc) {
        res.json({
          msg: 'find_succ',
          code: 200,
          data: {
            info: '接口编辑成功！'
          }
        })
      }
    })
}