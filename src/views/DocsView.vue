<template>
    <div class="about">
        <h3>MattaPHP documentation</h3>
        <DocsComponents />
    </div>
</template>

<script>
import DocsComponents from '@/components/Docs/DocsComponents.vue'

export default{
    name: 'DocsView',
    components:{
        DocsComponents
    }
}
</script>

<style>
.about{
    margin-top: 5vh;
}
h3{
    margin: 30px;
    color: #42b983 !important;
}
</style>