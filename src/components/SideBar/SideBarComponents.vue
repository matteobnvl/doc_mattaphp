<template>
    <div class="sidebar">
        <ul class="sidebar-menu">
            <li class="sidebar-menu-item">
                <router-link :to="{ name: 'docs_detail', params: {components: 'installation'} }"><i class="bi bi-rocket-takeoff"></i>Installation</router-link>
            </li>
            <li class="sidebar-menu-item">
                <router-link :to="{ name: 'docs_detail', params: {components: 'rooting'} }"><i class="bi bi-signpost-2"></i>Rooting</router-link>
            </li>
            <li class="sidebar-menu-item">
                <router-link :to="{ name: 'docs_detail', params: {components: 'bdd'} }"><i class="bi bi-database"></i>BDD</router-link>
            </li>
            <li class="sidebar-menu-item">
                <router-link :to="{ name: 'docs_detail', params: {components: 'migration'} }"><i class="bi bi-shuffle"></i>Migration</router-link>
            </li>
            <li class="sidebar-menu-item">
                <router-link :to="{ name: 'docs_detail', params: {components: 'mail'} }"><i class="bi bi-envelope"></i>Mail</router-link>
            </li>
            <li class="sidebar-menu-item">
                <router-link :to="{ name: 'docs_detail', params: {components: 'template'} }"><i class="bi bi-file-earmark-spreadsheet"></i>Template</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    name: 'SideBarComponents'
}
</script>

<style>
.sidebar{
    width: 20vw;
    height: 80vh;
    position: fixed;
}
.sidebar ul>li a{
    color: white;
    text-decoration: none;
}

.sidebar-menu {
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.sidebar-menu-item {
  margin-bottom: 10px;
}

.sidebar-menu-item a {
  display: block;
  padding: 10px;
  color: #333;
  text-decoration: none;
  border-radius: 3px;
  transition: background-color 0.3s;
}
.sidebar-menu-item a.router-link-exact-active{
    color: #42b983;
}

.sidebar-menu-item a:hover {
  background-color: #282c31;
}

i{
    margin-left: 10px;
    margin-right: 20px;
}
</style>

