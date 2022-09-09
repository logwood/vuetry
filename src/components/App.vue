<template>
   <div class="app"></div>
      <Editor v-model="state"></Editor>
</template>

<script>
import { ref } from '@vue/reactivity';
import data from './data.json';
import Editor from '@/packages/editor';
export default{
    components:{
      Editor
    },
    setup(){
      const state= ref(data);//state.value
      return{
        state
      }     
    }
  }
</script>

<style>
</style>
