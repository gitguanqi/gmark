var User = require('../model/User');

//用户添加
exports.showUserAdd = (req, res, next) => {
    res.render('useradd');
}

//用户添加
exports.UserAdd = (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    
    User.findOne({username:username},function(err,doc) {
      if(doc) {
          res.json({
            msg: 'set_fali',
            code: 101,
            data: {
              info: '用户已存在！'
            }
          })
      }else {     
        User.create({username:username,password:password},function(err,doc) {
            if(doc) {
                res.json({
                    msg: 'set_succ',
                    code: 200,
                    data: {
                        info: '新建成功！'
                    }
                })
            }
        })
      }
    })
}