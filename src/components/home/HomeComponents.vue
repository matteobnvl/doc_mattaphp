<template>
    <div>
        <h1>MattaPHP</h1>
        <h2>Une framework php simple et minimaliste</h2>
        <div class="box-btn">
            <a href="#">Get start</a>
            <a href="#">View on github</a>
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

</style>