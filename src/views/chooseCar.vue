<template>
  <div>
    <carSearchForm></carSearchForm>
    <sidebar></sidebar>
  </div>
</template>

<script>
import carSearchForm from "../components/carSearchForm"
import Sidebar from "../components/Sidebar"
export default {
  name: 'choosecar',
  props: {
   
  },
  components:{
    carSearchForm,
    Sidebar,
    

  },
  data() {
    return {
     
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
