<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-row>
      <el-col :span="24">
        <el-button>按钮</el-button>
        <el-button type="primay">按钮</el-button>
        <el-button type="success">按钮</el-button>
        <el-button type="danger" round>按钮</el-button>
        <el-button type="warning" icon="el-icon-edit" circle></el-button>
      </el-col>
    </el-row>
    <template>
      <el-radio v-model="radio" label="1">男</el-radio>
      <el-radio v-model="radio" label="2">女</el-radio>
    </template>
    <template>
      <el-checkbox-group v-model="checklist">
        <el-checkbox label="1">上海</el-checkbox>
        <el-checkbox label="2">武汉</el-checkbox>
        <el-checkbox label="3">北京</el-checkbox>
        <el-checkbox label="4" disabled>广州</el-checkbox>
      </el-checkbox-group>
    </template>
    <template>
      <el-input v-model="txt" placeholder="请填写内容"></el-input>
      <el-input v-model="txt" suffix-icon="el-icon-date" placeholder="请填写内容"></el-input>
      <el-input v-model="txt" prefix-icon="el-icon-search" placeholder="请填写内容"></el-input>
      <el-input type="textarea" :row="3" v-model="txt"></el-input>
      <el-input-number v-model="num" @change="changeNum" :min="1" :max="100"></el-input-number>
    </template>
    <template>
      <el-select v-model="selectValue" filterable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </template>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      radio:'1',
      checklist:['1','2'],
      txt:'输入框',
      num:50,
      selectValue:'',
      options: [{
          value: '1',
          label: '黄金糕'
        }, {
          value: '2',
          label: '双皮奶'
        }, {
          value: '3',
          label: '蚵仔煎'
        }, {
          value: '4',
          label: '龙须面'
        }, {
          value: '5',
          label: '北京烤鸭'
        }],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    changeNum(value){
      console.log(value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
