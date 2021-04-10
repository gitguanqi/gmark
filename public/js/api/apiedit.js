// 类型添加
$(function(){
    $('form').on('submit',function(e){
        e.preventDefault();
        if($('#title').val() == '') {
            layer.alert('接口标题不能为空！', {
                icon: 2,
                skin: 'layer-ext-moon'
            })
            return false;
        }
        if($('#addr').val() == '') {
            layer.alert('接口地址不能为空！', {
                icon: 2,
                skin: 'layer-ext-moon'
            })
            return false;
        }
        if($('#params').val() == '') {
            layer.alert('接口参数不能为空！', {
                icon: 2,
                skin: 'layer-ext-moon'
            })
            return false;
        }
        if($('#methods').val() == '') {
            layer.alert('请求方式不能为空！', {
                icon: 2,
                skin: 'layer-ext-moon'
            })
            return false;
        }
        if($('#comment').val() == '') {
            layer.alert('接口描述不能为空！', {
                icon: 2,
                skin: 'layer-ext-moon'
            })
            return false;
        }
        $.ajax({
            url: '/api/edit',
            type: 'post',
            data: $('form').serialize(),
            success: function (res) {
                if(res.msg == 'find_succ'){
                    layer.alert(res.data.info, {
                        icon: 1,
                        skin: 'layer-ext-moon'
                    })
                    setTimeout(function(){
                        location.href = '/api';
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