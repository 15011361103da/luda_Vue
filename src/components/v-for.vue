<template>
    <div>
      <ul>
        <li v-for="(name,index,key) in names" v-bind:key="index">{{name}}-{{index}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "v-for",
      data(){
        return{
          names:[
            'lda  ',
            'xiuyuchuan',
            'lujianhong',
            'hangjunyying'
          ]
        }
      }
    }
</script>

<style scoped>

</style>
