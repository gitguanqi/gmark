var User = require('../model/User');

//用户编辑
exports.showUserEdit = (req, res, next) => {
    var id = req.query.id;
    User.findOne({_id:id}).then(doc => {
        if(doc) {
            res.render('useredit',{
                username: doc.username,
                password: doc.password,
                id: doc.id
            });
        }
    })
}

//用户编辑
exports.UserEdit = (req, res, next) => {
    var id = req.body.id;
    var data = {
        username: req.body.username,
        password: req.body.password
    }
    User.updateOne({_id:id},data).then((doc)=>{
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