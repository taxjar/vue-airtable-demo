<template>
  <div id="app">
    <vue-airtable :base="base" :columns="['Warehouse Code', 'Street Address', 'County', 'Sales Tax Rate']" filter="AND({State} = 'CA', {Status} = 'Open', {Type} = 'Fulfillment')"></vue-airtable>
  </div>
</template>

<script>
import VueAirtable from './components/VueAirtable'

export default {
  name: 'app',
  components: {
    VueAirtable
  },
  data: function () {
    return {
      base: process.env.AIRTABLE_BASE
    };
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
}
</style>
