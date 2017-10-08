<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import bottom from './components/public/bottom.vue'
export default {
  name: 'app',
  components:{
    
  }
}
</script>

<style lang='scss'>
@import'../static/css/reset.css';
@import'../static/css/public.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
}
</style>
