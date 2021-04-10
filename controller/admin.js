var Admin = require('../model/Admin');

// 后台登录显示
exports.showLogin = (req,res,next) => {
    res.render('login');
}

exports.LoginSet = (req,res,next) => {
    var username = req.body.username,
        password = req.body.password;
    Admin.findOne({username}).then(doc => {
        console.log(doc);
        if(doc) {
            if(username != doc.username) {
                res.json({
                    msg: 'login_fail',
                    code: 109,
                    data: {
                        info: '用户名错误！'
                    }
                })
            }else if(password != doc.password) {
                res.json({
                    msg: 'login_fail',
                    code: 109,
                    data: {
                        info: '密码错误！'
                    }
                })
            }else{ 
                var now = new Date();
                now = Date.parse(now);
                var arr = ['a','b','c','d','e'];
                var token_access =   doc.username + Math.floor(Math.random(0,1)*10000) + arr[Math.floor(Math.random(0,1)*5)] + arr[Math.floor(Math.random(0,1)*5)] + now;
                var user_Info = {
                    username: doc.username,
                    level: doc.level,
                    token: token_access
                }
                res.cookie('admin_cookie',JSON.stringify(user_Info),{maxAge: 7*24*60*60*1000});
                res.json({
                    msg: 'login_succ',
                    code: 201,
                    data: {
                        info: '登录成功！'
                    }
                })
            }
        }else{
            res.json({
                msg: 'login_fail',
                code: 109,
                data: {
                    info: '用户名不存在！'
                }
            })
        }
    })
}

// 退出登录
exports.AdminLogout = (req,res,next) => {
    res.clearCookie('admin_cookie');
    res.redirect('/admin/login');
}