<template>
  <Layout>
    <div id="app">
      <div id="nav">
        <router-link to="/">Create request</router-link> |
        <router-link to="/choosecar">Choose car</router-link> |
        <router-link to="/chooseextra">Choose extra</router-link> |
        <router-link to="/reviewandbook">Review and book</router-link>
      </div>
      <router-view/>
    </div>
  </Layout>
  
</template>

<script>
  import Layout from "./components/layout.vue";
  export default {
    components:{
      Layout
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
