

var environment = 108;
var params = {};
var IP = "";
var search = "";
if(environment === 108){
    IP = 'http://10.128.151.108:443';
    search = '?formId=1264122110670938112&userId=10003&createDate=2020-05-21%2009:38:57'
    search.replace(/([^?&=]+)=([^&]+)/g, function(_, k, v){params[k] = v})
}else if(environment === 13){
    IP = 'http://10.128.151.13:443';
    search = '?formId=1262260388381634560&userId=10003&createDate=2020-05-21%2009:38:57'
    search.replace(/([^?&=]+)=([^&]+)/g, function(_, k, v){params[k] = v})
}else if(environment === 65){
    IP = 'https://test.cictsj.com:30000';
    search = '?formId=1262260388381634560&userId=10003&createDate=2020-05-21%2009:38:57'
    search.replace(/([^?&=]+)=([^&]+)/g, function(_, k, v){params[k] = v})
}else if(environment === 'all'){
    IP = location.origin;
    location.search.replace(/([^?&=]+)=([^&]+)/g, function(_, k, v){params[k] = v})
}

function getService(path,callback){
    $.ajax({
        type: 'get',
        url: path,
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        success: function success(data) {
            callback(data)
        },
        error: function error(error) {
            callback({status:-1,errorMsg:'网络未知错误'})
        }
    });
}

function postService(path,body,callback){
    $.ajax({
        type:'get',
        url:path,
        contentType:'application/json;charset=utf-8',
        dataType:'json',
        data:JSON.stringify(body),      
        success: function success(data) {
            callback(data)
        },
        error: function error(error) {
            callback({status:-1,errorMsg:'网络未知错误'})
        }
    });
}

function uploadService(path,body,callback){
    $.ajax({
        url:path,
        type:"post", 
        data:body, 
        contentType:'application/x-www-form-urlencoded;charset=utf-8',
        processData: false ,
        contentType: false,
        success: function success(data) {
            callback(data)
        },
        error: function error(error) {
            callback({status:-1,errorMsg:'网络未知错误'})
        }
    });
}





