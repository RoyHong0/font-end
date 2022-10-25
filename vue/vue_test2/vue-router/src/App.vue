<template>
  <div>
    <!-- <HomeOne/>
    <AboutOne/> -->
    <BannerOne/>
    <router-link replace to="/about">About</router-link> <br>
    <router-link replace to="/home">Home</router-link><br>
    <router-view>你好</router-view>
  </div>
</template>

<script>
import BannerOne from './components/BannerOne'
export default {
  name: 'App',
  components: {
    BannerOne
  }
}
</script>

<style>

</style>
