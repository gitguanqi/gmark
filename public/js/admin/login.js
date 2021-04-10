// 管理员登录
//便签添加
$(function(){
    $('form').on('submit',function(e){
        e.preventDefault();
        var nameReg = /[0-9A-Za-z]/g;
        if($('#username').val() == '') {
            layer.alert('用户名不能为空！', {
                icon: 2,
                skin: 'layer-ext-moon'
            })
            return false;
        }
        if(!nameReg.test($('#username').val())) {
            layer.alert('用户名为数字和字母！', {
                icon: 2,
                skin: 'layer-ext-moon'
            })
            return false;
        }
        if($('#password').val() == '') {
            layer.alert('密码不能为空！', {
                icon: 2,
                skin: 'layer-ext-moon'
            })
            return false;
        }
        if(!nameReg.test($('#password').val())) {
            layer.alert('密码为数字和字母！', {
                icon: 2,
                skin: 'layer-ext-moon'
            })
            return false;
        }
        $.ajax({
            url: '/admin/login',
            type: 'post',
            data: $('form').serialize(),
            success: function (res) {
                if(res.msg == 'login_succ'){
                    layer.alert(res.data.info, {
                        icon: 1,
                        skin: 'layer-ext-moon'
                    })
                    setTimeout(function () {
                        location.href = '/admin';
                    },1500)
                }else {
                    layer.alert(res.data.info, {
                        icon: 2,
                        skin: 'layer-ext-moon'
                    })
                }
            },
            error: function (err) {
                throw new Error(err)
            }
        })
    })
})