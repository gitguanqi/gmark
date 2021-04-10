// 便签编辑
$(function(){
    $('form').on('submit',function(e){
        e.preventDefault();
        var nameReg = /[0-9A-Za-z]/g;
        var pwdReg = /[0-9A-Za-z]{6，16}/g;
        if($('#password').val() == '') {
            layer.alert('密码不能为空！', {
                icon: 2,
                skin: 'layer-ext-moon'
            })
            return false;
        }
        if((pwdReg.test($('#password').val()))) {
            layer.alert('密码不能为数字和字母！', {
                icon: 2,
                skin: 'layer-ext-moon'
            })
            return false;
        }
        $.ajax({
            url: '/admin/set/edit',
            type: 'post',
            data: $('form').serialize(),
            success: function (res) {
                if(res.msg == 'set_succ'){
                    layer.alert(res.data.info, {
                        icon: 1,
                        skin: 'layer-ext-moon'
                    })
                    setTimeout(function () {
                        location.href = '/admin/set'
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