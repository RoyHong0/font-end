<template>
  <div>
    <CountOne/>
    <hr>
    <PersonOne/>
  </div>
</template>

<script>
import CountOne from './components/CountOne'
import PersonOne from './components/PersonOne'
export default {
  name: 'App',
  components: {
    CountOne,
    PersonOne
  }
}
</script>

<style>

</style>
