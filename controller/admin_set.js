var Admin = require('../model/Admin');

// 显示设置页面
exports.showSet = (req, res, next) => {
    Admin.find().then(docs => {
        if(docs) {
            Admin.countDocuments().then(num => {
                if(num) {
                    res.render('set',{
                        res: docs,
                        count: num
                    });
                }
            })
        }
    })
}

//管理员编辑
exports.showSetEdit = (req, res, next) => {
    var id = req.query.id;
    Admin.findOne({_id:id}).then(doc => {
        if(doc) {
            res.render('setedit',{
                username: doc.username,
                password: doc.password,
                level: doc.level,
                id: doc.id
            });
        }
    })
}

//管理员编辑
exports.SetEdit = (req, res, next) => {
    var id = req.body.id;
    var data = {
        password: req.body.password
    }
    Admin.updateOne({_id:id},data).then((doc)=>{
        if(doc) {
            res.json({
                msg: 'set_succ',
                code: 200,
                data: {
                    info: '编辑成功！'
                }
            })
        }
    })
}

//管理员添加
exports.showSetAdd = (req, res, next) => {
    res.render('setadd');
}

//管理员添加
exports.SetAdd = (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    var level = req.body.level;
    Admin.findOne({username:username},function(err,doc) {
      if(doc) {
          res.json({
            msg: 'set_fali',
            code: 101,
            data: {
              info: '管理员已存在！'
            }
          })
      }else {
        // Admin.countDocuments().then(num => {
            // if(num && num <= 5) {          
                Admin.create({username:username,password:password,level:level},function(err,doc) {
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
            // }else{
            //     res.json({
            //         msg: 'set_fali',
            //         code: 101,
            //         data: {
            //           info: '管理员数量已满！'
            //         }
            //     })
            // }
        // })
      }
    })
}

// 删除用户名
exports.SetDel = (req,res,next) => {
    var id = req.query.id;
    Admin.remove({_id:id}).then((doc)=>{
      if(doc) {
        res.redirect('/admin/set');
      }
    })
}