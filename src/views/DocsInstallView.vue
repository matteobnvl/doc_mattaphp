<template>
    <section class="contain">
      <SideBarComponents />
      <div class="box">
        <div class="burger"><i class="bi bi-list"></i></div>
        <component :is="this.$route.params.components" />
      </div>
      <div class="box-progress">
        <div class="progress"><div class="sticky" :style="{ height: scrollHeight + '%' }"></div></div>
        <div class="box-title">
          <h6 v-for="item in currentItem" :key="item">{{ item }}</h6>
        </div>
      </div>
    </section>
  </template>

<script>
import SideBarComponents from '@/components/SideBar/SideBarComponents.vue'
import installation from '@/components/Docs/InstallationComponents.vue'
import rooting from '@/components/Docs/RootingComponents.vue'
import migration from '@/components/Docs/MigrationComponents.vue'
import bdd from '@/components/Docs/BddComponents.vue'
import mail from '@/components/Docs/MailComponents.vue'
import template from '@/components/Docs/TemplateComponents.vue'

export default{
  name: 'DocsInstallView',
  components: {
    SideBarComponents,
    installation, 
    rooting,
    migration,
    bdd,
    mail,
    template
  },
  data() {
    return {
      items: {
        installation: ['Démarrage', 'Configuration', 'Environnement'],
        rooting: ['Route simple', 'Route dynamique'],
        bdd: ['Connexion', 'Exemple d\'utilisation'],
        mail: ['Configuration', 'Exemple mail'],
        template: ['Configuration', 'Personnalisation', 'Methode disponible', 'Page d\'erreur']
      },
      scrollHeight: 0
    }
  },
  computed: {
    currentItem() {
      return this.items[this.$route.params.components] || [];
    }
  },
  mounted() {
    window.addEventListener('scroll', this.getScroll);
    this.getScroll();

    const burger = document.querySelector('.burger')
    const sidebar = document.querySelector('.sidebar')

    burger.addEventListener('click', function() {
      burger.classList.toggle('active')
      sidebar.classList.toggle('active')
    })
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.getScroll);
  },
  methods: {
    getScroll() {
      const body = document.querySelector('body');
      const scroll = window.scrollY / (body.clientHeight - window.innerHeight);
      if (window.scrollY === 0) {
        this.scrollHeight = 0;
      } else {
        this.scrollHeight = Math.round(scroll * 100);
      }
    }
  }

  
}

</script>

<style>

.contain{
  width: 100%;
  margin-top: 5vh;
}

.box{
  width: 75vw;
  margin-left: auto;
}

h1 {
    color: #42b983 !important;
    margin-bottom: 5vh;
}
h2{
    margin-bottom: 5vh;
}
.box p{
    width: 70%;
    text-align: left;
    margin:5vh 0px;
}
.code{
    width: 100%;
    margin-bottom: 5vh;
}
code{
    background-color: #282c31;
    width: 100%;
    border-radius: 15px;
    padding: 8px;
}

.div{
    width: 70%;
}

.link{
  text-decoration: none;
  color: #42b983;
}

.box-progress{
  width: 200px;
  height: 50vh;
  position: fixed;
  right: 0;
  top: 20%;
  display: flex;
  justify-content: space-between;
}

.box-progress .progress{
  width: 5px;
  height: 50%;
  margin: auto;
  background-color: #282c31;

}

.box-progress .progress .sticky{
  width: 5px;
  height: 1%;
  background-color: #42b983;

}
.box-progress .box-title{
  width: 80%;
  margin: auto;
}

.box-progress .box-title h6{
  margin: 30px 0px;
}

.burger{
  display: none;
}


@media screen and (max-width: 768px) {
  .box-progress{
    display: none;
  }

  .burger{
    display: block;
    width: 50px;
    height: 50px;
    display: flex;
    background-color: #282c31;
    text-align: center;
    border-radius: 15px;
  }

  .burger.active{
    margin-left: auto;
    transition: margin-left .4s;
  }

  .burger i{
    font-size: 2rem;
    text-align: center;
    margin: auto;
  }

  .box{
    width: 95%;
    margin: auto;
  }

  .box p{
    width: 100%;
  }

  .div{
    width: 100%;
  }
}
</style>