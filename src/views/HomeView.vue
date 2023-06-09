<template>
  <div class="home">
    <HomeComponents />
  </div>
</template>

<script>
import HomeComponents from '@/components/home/HomeComponents.vue'

export default {
  name: 'HomeView',
  components: {
    HomeComponents
  }
}
</script>

<style>
.home{
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
