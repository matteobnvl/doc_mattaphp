<template>
  <HeaderComponents />
  <router-view/>
  <footer>
    <p>
      Copyright © 2023 mattaphp.matteo-bonneval.fr - Tous droits réservés - développé par 
      <a class="link" href="https://matteo-bonneval.fr" target="_blank" >Bonneval Mattéo</a>
    </p>
  </footer>
</template>

<script>
import HeaderComponents from '@/components/header/HeaderComponents.vue'

export default {
  name: 'AppView',
  components: {
    HeaderComponents
  }
}
</script>

<style>
::-webkit-scrollbar{
	width: 5px;
	height: 5px;
	background-color: #212529;
}

::-webkit-scrollbar-thumb{
	background-color: white ;
	border-radius:5px ;
	border: 1px solid #212529;
}

::-webkit-scrollbar-track{
	background: transparent;
}

body {
  background-color: #212529;
}
#app{
  background-color: #212529;
  color: white;
  padding-bottom: 5vh;
  min-height: 100vh;
}
footer p{
  padding-top:5vh ;
  text-align: center;
  width: 100%;
}
</style>
