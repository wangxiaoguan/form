

// 每一个 Vuex 应用的核心就是 store（仓库）

// “store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)  组件的数据 data 

// Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，
// 若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。


//  你不能直接改变 store 中的状态。
//  改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。


import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
axios.defaults.baseURL = "http://47.94.208.182:3000/"

const baseURL = "http://47.94.208.182:3000";
// import Vue from "vue";
Vue.use(Vuex);

// import state from "./state"
// import actions from "./actions";
// import mutations from "./mutations"
// import getters from "./getters";
const state = {
    number:1000,
    city:"武汉wh",
    mv:[],
    msg:"hello vuex",
    obj:{
        username:"zkl"
    },
    data:"1803-----daydayup",
    username:"zkl1",
    phone:"10086"
}

const actions = {
    increment(context){
        // context == store   =  {commit:func}  = {commit:commit} = {commit}
        // context.commit("mutations")  {commit:func}
        console.log('------------->',context)
        context.commit("increment")   // mutations 
    }, 
    decrement({commit}){  // action 参数解构 
        commit("decrement")  // mutationType  decrement
    },
    countadd({commit},preload){
        console.log(preload);
        console.log('------------->',commit)
        // commit("countadd",preload);
        dispatch('countadd',preload)
    },
    changeCity({commit},city){
        commit("changeCity",city);
    },
    changeMsg({commit},{msg}){
        commit("changeMsg",{msg});
    },
    changeUsername({commit},{username}){
        commit("changeUsername",{username});
    },
    changeData({commit},{url,id}){
        // ajax 异步
        // this.$http
        console.log(url);
        Vue.http.get(baseURL+url).then(res=>{
            console.log(res);
            commit("changeData",res.body);
        })
    },
    getmv({commit},{url,limit,callback}){
        axios.get(url,{
            params:{
                limit
            }
        }).then(res=>{
            console.log(res.data);
            commit("getmv",res.data);
            console.log(callback);
            callback();
        })
    } 
}

const mutations = {
    add(){

    },
    increment(state){
        state.number++;
    },
    decrement(state){
        state.number--;
    },
    countadd(state,preload){
        state.number+=preload;
    },
    changeCity(state,city){
        state.city = city;
    },
    changeMsg(state,{msg}){
     
        state.msg = msg;  
        // staet.msg = {...state.msg,msg:msg}
    },
    changeUsername(state,{username}){
        state.obj = {...state.obj,username:username};// 对象  
    },
    changeData(state,data){
        state.data = data;
    },
    getmv(state,mv){
        state.mv = mv;
    },
    getUsername(state,username){
      
        state.username = username;
        console.log("xxxusernamee")
        console.log(state);
    },
    updatePhone(state,phone){
        state.phone = phone;
        console.log(state);
    }
}

const getters = {
    mvs(state){
        return state.mv.filter((m,index)=>index%2==0);
    }
}
const store = new Vuex.Store({
    state:state,
    actions:actions,
    getters:getters,
    mutations:mutations
})

export default store;

