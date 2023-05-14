
<template>
    <section class="contener">
        <div v-for="n in 9" :key="n" class="items ">
            <div class="item">{{ n }}</div>
        </div>
    </section>
</template>

<script>
export default{
    name:'PaginBlock'
}
</script>

<style scoped>
section{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 91px;
}
.items{
    margin: 10px;
    height: 36px;
    width: 36px;
    border-radius: 4px;
    border: 1px;
    border-color: gray;
    color: #95A1BB;

}
.items:hover:not(.active){
    background-color: #6E38F7;
    color: white;
}
.item{
    margin: 8px 14px;
}
</style>