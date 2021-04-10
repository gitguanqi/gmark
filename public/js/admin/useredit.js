// 用户编辑
$(function(){
    $('form').on('submit',function(e){
        e.preventDefault();
        var nameReg = /[0-9A-Za-z]/g;
        if($('input[type="text"]').val() == '') {
            layer.alert('用户名不能为空！', {
                icon: 2,
                skin: 'layer-ext-moon'
            })
            return false;
        }
        if(!nameReg.test($('input[type="text"]').val())) {
            layer.alert('用户名格式不正确！', {
                icon: 2,
                skin: 'layer-ext-moon'
            })
            return false;
        }
        var nameReg = /[0-9A-Za-z]/g;
        if($('#password').val() == '') {
            layer.alert('密码不能为空！', {
                icon: 2,
                skin: 'layer-ext-moon'
            })
            return false;
        }
        $.ajax({
            url: '/user/edit',
            type: 'post',
            data: $('form').serialize(),
            success: function (res) {
                if(res.msg == 'set_succ'){
                    layer.alert(res.data.info, {
                        icon: 1,
                        skin: 'layer-ext-moon'
                    })
                    setTimeout(function(){
                        location.href = '/user/list';
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