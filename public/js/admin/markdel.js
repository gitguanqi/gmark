// 便签删除
function markDel(from,id,e) {
    var e=e || window.event;
    e.preventDefault();
    layer.confirm('你确定要删除？', function(index){
        layer.close(index);
        //向服务端发送删除指令
        if(from == 'mark') {
            location.href = '/admin/mark/del?id='+id;
        }else if(from == 'type'){
            location.href = '/admin/type/del?id='+id;
        }else if(from == 'admin'){
            location.href = '/admin/set/del?id='+id;
        }else if(from == 'user'){
            location.href = '/user/del?id='+id;
        }else{
            location.href = '/api/del?id='+id;
        }
    });
}