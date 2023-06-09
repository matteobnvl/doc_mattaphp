<template>
    <div>
        <h1>MattaPHP</h1>
        <h2>Une framework php simple et minimaliste</h2>
        <div class="box-btn">
            <RouterLink to="/docs/installation">Get start <i class="bi bi-rocket"></i></RouterLink>
            <a target="_blank" href="https://github.com/matteobnvl/mattaphp">View on github <i class="bi bi-github"></i></a>
        </div>
    </div>
</template>

<script>
export default{
    name: 'HomeComponents'
}
</script>

<style>
.box-btn{
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
}
.box-btn a{
    border: 2px solid white;
    border-radius: 10px;
    width: 30%;
    text-align: center;
    padding: 5px;
    text-decoration: none;
    color: white;
}

@media screen and (max-width: 768px) {
    .box-btn a{
        width: 45%;
    }
}

</style>