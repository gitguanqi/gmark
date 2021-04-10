// 管理员添加
$(function(){
    $('form').on('submit',function(e){
        e.preventDefault();
        var nameReg = /[0-9A-Za-z]/g;
        if($('input[type="text"]').val() == '') {
            layer.alert('管理员昵称不能为空！', {
                icon: 2,
                skin: 'layer-ext-moon'
            })
            return false;
        }
        if(!nameReg.test($('input[type="text"]').val())) {
            layer.alert('管理员名称格式不正确！', {
                icon: 2,
                skin: 'layer-ext-moon'
            })
            return false;
        }
        var nameReg = /[0-9A-Za-z]/g;
        if($('#password').val() == '') {
            layer.alert('管理员密码不能为空！', {
                icon: 2,
                skin: 'layer-ext-moon'
            })
            return false;
        }
        if($('#level').val() == '') {
            layer.alert('管理员级别不能为空！', {
                icon: 2,
                skin: 'layer-ext-moon'
            })
            return false;
        }
        $.ajax({
            url: '/admin/set/add',
            type: 'post',
            data: $('form').serialize(),
            success: function (res) {
                if(res.msg == 'set_succ'){
                    layer.alert(res.data.info, {
                        icon: 1,
                        skin: 'layer-ext-moon'
                    })
                    setTimeout(function(){
                        location.href = '/admin/set';
                    },2000)
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