// 检测cookie
// 设置cookie
function setCookie(key,value,time) {
    var now = new Date();
    now.setDate(now.getDate()+time);
    document.cookie = key + '=' + encodeURIComponent(value) + ';expires = ' + now;
}

//获取cookie
function getCookie(key){
    var arr1 = document.cookie.split(";");
    for(var i=0;i<arr1.length;i++){
        var arr2 = arr1[i].split('=');
        if(arr2[0].trim() === key){
            return decodeURIComponent(arr2[1])
        }
    }
    return '';
}

// 移除cookie
function removeCookie(key) {
    setCookie(key,null,-1);
}

// 检测是否登录
if(!(getCookie('admin_cookie') && JSON.parse(getCookie('admin_cookie')).token)) {
    location.href = "/admin/login"
}

$(function () {
    init();
})

// 登录成功
function init() {
    if(getCookie('admin_cookie') && JSON.parse(getCookie('admin_cookie')).username && JSON.parse(getCookie('admin_cookie')).token) {
        var name =  JSON.parse(getCookie('admin_cookie')).username;
        var level =  JSON.parse(getCookie('admin_cookie')).level;
        if(level == 'super') {
            $('#username').text('超级管理员：'+name);
            $('.levelone').css('display','none');
        }else if(level == 'admin') {
            $('#username').text('管理员：'+name);
            $('.del_btn').css('display','none');
            $('.fixpwd').attr('href','javascript:;');
            $('.fixpwd').attr('disabled','disabled');
            $('.fixpwd').text('禁止更改');
            $('.levelone').css('display','none');
            $('.leveltwo').css('display','none');
            $('.usermang').css('display','none');
        }else{
            $('#username').text('编辑：'+name);
            $('.set').css('display','none');
            $('.apides').css('display','none');
            $('.usermang').css('display','none');
        }
        if(level == 'super' || level == 'admin') {
            $('.del-btn').css('display','inline-block');
        }else{
            $('.del-btn').css('display','none');
        }
    }
}