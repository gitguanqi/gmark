var Api = require('../model/Api');

exports.ShowApiAdd = (req,res,next) => {
    res.render('apiadd');
};

exports.AddApi = (req,res,next) => {
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
    
    Api.findOne({addr:addr},function(err,doc) {
      if(doc) {
          console.log(doc);
          res.json({
            msg: 'find_fali',
            code: 101,
            data: {
              info: '接口已存在！'
            }
          })
      }else {
        Api.create(data,function(err,doc) {
          if(doc) {
            res.json({
              msg: 'find_succ',
              code: 200,
              data: {
                info: '接口添加成功！'
              }
            })
          }
        })
      }
    })
}