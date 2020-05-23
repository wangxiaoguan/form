import $ from 'jquery';
import Taro from "@tarojs/taro";
export function postService(path,token, body, callback) {
    $.ajax({
        type: 'post',
        url: path,
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        headers: { "Content-Type": "application/json", "YQ-Token": token },
        data:JSON.stringify(body),  
        success:data =>{
            callback(data)
        },
        error: error=>{
            Taro.atMessage({message: '未知错误',type: "error"});
        }
    })
}

export function getService(path,token, callback) {
    $.ajax({
        type: 'get',
        url: path,
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        headers: { "Content-Type": "application/json", "YQ-Token": token },
        success: data=>{
            callback(data)
        },
        error: error=>{
            Taro.atMessage({message: '未知错误',type: "error"});
        }
    });
}


