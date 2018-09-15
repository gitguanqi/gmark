var Type = require('../model/Type');

//分类列表
const ShowTypeList = (req,res,next) => {
    var page = req.query.page;
    var current;
    var pagesize = 5;
    if(page) {
        current = page;
    }else{
        current = 1;
    }
    Type.find({}).skip((current-1)*pagesize).limit(pagesize).then(docs => {
      if(docs) {
        Type.countDocuments().then(num => {
          if(num) {
            res.render('typelist',{
              res: docs,
              count: num,
              current: current-1,
              allpage: Math.ceil(num/pagesize)
            });
          }
        })
      }
    })
}

module.exports = ShowTypeList;