<template>
    <div class="card m-2">
        <div class="card-body">
            <h5 class="card-title">{{ data.title }}<i :class="data.icon"></i></h5>
            <p class="card-text p">{{ data.texte }}</p>
            <router-link class="link" :to="{ name: data.link , params:{components: data.title.toLowerCase() }}" >{{ data.title }} <i class="bi bi-chevron-right"></i></router-link>
        </div>
    </div>
</template>

<script>
export default{
    name: 'CardsComponents',
    props:{
        data: Array
    }
}
</script>

<style>
.p{
    width: 100%;
}

.card{
    background-color: #282c31 !important;
    color: white !important;
}
</style>