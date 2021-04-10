// 便签编辑
$(function(){
    $('form').on('submit',function(e){
        e.preventDefault();
        var nameReg = /[0-9A-Za-z]/g;
        if($('#name').val() == '') {
            layer.alert('分类不能为空！', {
                icon: 2,
                skin: 'layer-ext-moon'
            })
            return false;
        }
        if(nameReg.test($('#name').val())) {
            layer.alert('分类不能为数字和字母！', {
                icon: 2,
                skin: 'layer-ext-moon'
            })
            return false;
        }
        $.ajax({
            url: '/admin/type/edit',
            type: 'post',
            data: $('form').serialize(),
            success: function (res) {
                if(res.msg == 'find_succ'){
                    layer.alert(res.data.info, {
                        icon: 1,
                        skin: 'layer-ext-moon'
                    })
                    setTimeout(function(){
                        location.href = '/admin/type/list';
                    },1000)
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