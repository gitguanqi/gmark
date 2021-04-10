var Api = require('../model/Api');

//分类列表
const ShowApiList = (req,res,next) => {
    var page = req.query.page;
    var current;
    var pagesize = 5;
    if(page) {
        current = page;
    }else{
        current = 1;
    }
    Api.find({}).skip((current-1)*pagesize).limit(pagesize).then(docs => {
      if(docs) {
        if(docs.length === 0) {
          res.render('api',{
            res: [],
            count: 0,
            current: 1,
            allpage: 1
          });
        } else {
          Api.countDocuments().then(num => {
            if(num) {
              res.render('api',{
                res: docs,
                count: num,
                current: current-1,
                allpage: Math.ceil(num/pagesize)
              });
            }
          })
        }
      }
    })
}

module.exports = ShowApiList;