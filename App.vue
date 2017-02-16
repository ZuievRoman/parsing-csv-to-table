<template>
  <div id="app">
    <parsingFile></parsingFile>
  </div>
</template>

<script>
import parsingFile from './components/parsingFile/parsingFile'

export default {
  name: 'app',
  components: {
    parsingFile
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
