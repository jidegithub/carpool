<template>
  <div>
    <Header />
      <main className="flex flex-col flex-1 mx-auto w-full">
        <slot/>
      </main>
    <Footer />
  </div>
</template>

<script>
import Header from './header.vue'
import Footer from './footer.vue'

export default {
  name: "Layout",
  components:{
    Header,
    Footer
  }
}
</script>

<style>

</style>