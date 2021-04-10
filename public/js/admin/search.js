// 便签编辑
$(function(){
    $('#search_form').on('submit',function(){
        if($('input[name="key"]').val() == '') {
            layer.alert('搜索不能为空！', {
                icon: 2,
                skin: 'layer-ext-moon'
            })
            return false;
        }
        return true;
    })
})