var user = require('../model/User');

// 用户注册
exports.userReg = (req,res,next) => {
    var username = req.body.username;
    var password = req.body.password;
    var data = {
        username:username,
        password:password
    }
    if (!data.username) {
        res.json({
            msg: 'save_fail',
            code: 109,
            data: {
                info: '用户名称不能为空！'
            }
        })
    }
    if (!data.password) {
        res.json({
            msg: 'save_fail',
            code: 109,
            data: {
                info: '用户密码不能为空！'
            }
        })
    }
    user.findOne({username:username},function(err,doc) {
        if(err) {
            return res.redirect('/user/reg')
        }
        if(doc) {
            res.json({
                msg: 'save_fail',
                code: 109,
                data: {
                    info: '用户已存在！'
                }
            })
        }else {
            user.create(data).then((doc)=>{
                if(doc) {
                    res.json({
                        msg: 'save_succ',
                        code: 200,
                        data: {
                            info: '注册成功！'
                        }
                    })
                }
            });
        }
    })
}

//用户登录
exports.userLogin = (req,res,next) => {
    var username = req.query.username;
    var password = req.query.password;
    var data = {
        username:username,
        password:password
    }
    user.findOne({username:username},function(err,doc) {
        if(doc) {
            
            if(username != doc.username) {
                res.json({
                    msg: 'save_fail',
                    code: 109,
                    data: {
                        info: '用户名不正确！'
                    }
                })
            }else if(password != doc.password) {
                res.json({
                    msg: 'save_fail',
                    code: 109,
                    data: {
                        info: '密码不正确！'
                    }
                })
            }else{
                var now = Date.parse(new Date());
                var token = 'test' + now;
                req.session.userName = req.query.username;
                req.session.token = token;
                res.json({
                    msg: 'save_succ',
                    code: 200,
                    data: {
                        info: '登录成功！',
                        token: token,
                        expires: 24*60*60*1000*7,
                        username: doc.username
                    }
                })
            }
        }else {
            res.json({
                msg: 'save_fail',
                code: 109,
                data: {
                    info: '用户不存在！'
                }
            })
        }
    })
}

// 退出登录
exports.logoutUser = (req,res,next) => {
    var token = req.query.token;
    if(token) {
        req.session.destroy(function(err) {
            if(err){
                res.json({
                    msg: 'save_fail',
                    code: 109,
                    data: {
                        info: '退出登录失败！'
                    }
                })
            }else{
                res.json({
                    msg: 'save_succ',
                    code: 200,
                    data: {
                        info: '退出登录成功！'
                    }
                })
            }
            req.session = null;
        })
    }else{
        res.json({
            msg: 'get_fali',
            code: 304,
            data: {
            info: 'No authorization！'
            }
        })
    }
}