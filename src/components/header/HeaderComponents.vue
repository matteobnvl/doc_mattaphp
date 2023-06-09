<template>
    <header>
        <div class="head">
          <div class="title">
              <router-link to="/">
                <img src="@/assets/logo_matta.png" alt="">
              </router-link>
          </div>
          <nav>
              <router-link to="/">Home</router-link>
              <router-link to="/docs">Docs</router-link>
              <router-link to="/about">About</router-link>
          </nav>
        </div>
    </header>
</template>

<script>
export default {
  name: 'HeaderComponents',
}
</script>

<style>
header{
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0px 30px;
  background-color: #212529;
  z-index: 999;
  position: sticky;
  top: 0;
}

header .head{
  width: 98%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #282c31;
  border-radius: 20px;
  padding: 0px 50px;
}

.title{
  width: 20%;
}
.title a img{
  width: 60%;
}

nav{
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a{
  width: 30%;
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

}

nav a:hover{
  color: #42b983;
  transition: color .3s;
}

nav a.router-link-exact-active {
  border-bottom:2px solid #42b983;
}
</style>