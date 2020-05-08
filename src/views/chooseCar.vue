<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <P>HELLO from choose car</P>
  </div>
</template>

<script>


export default {
  name: 'choosecar',
  props: {
    msg: String,
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
