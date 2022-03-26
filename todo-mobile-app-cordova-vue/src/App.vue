<template>
  <div id="app">
    <router-view/>
    <div><Footer/></div>
  </div>
</template>

<script>
import Footer from './components/Footer'

export default {
  name: 'App',
  components: { Footer }
}
</script>

<style>

</style>
