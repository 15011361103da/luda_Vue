<template>
    <div>
      <div>
        <label>Id:
          <input type="text" v-model="id">
        </label>
        <label>Name:
          <input type="text" v-model="name">
        </label>
        <input type="button" value="添加" @click="add">
      </div>
      <ul>
        <li v-for="item in list" :key="item.id">
          <input type="checkbox">
          {{item.id}}---{{item.name}}
        </li>
      </ul>

      <p class="shop">
        士大夫空间和内饰的烦恼事的方兰看看
      </p>
    </div>
</template>

<script>
    export default {
      name: "v-for",
      data(){
        return{
          id:'',
          name:'',
          list:[
            {id:7,name:'李斯'},
            {id:2,name:'嬴政'},
            {id:3,name:'赵高'},
            {id:4,name:'韩非'},
            {id:5,name:'荀子'}
          ],
        }
      },
      methods:{
        add(){
          //this.list.push({id:this.id,name:this.name});
          this.list.unshift({id:this.id,name:this.name});
        }
      },
    }
</script>

<style>
  .shop{
    width: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
