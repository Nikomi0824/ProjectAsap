<template>
    <section class="contener">
        <img :src="item.img" alt="">
        <h6>{{ item.title }}</h6>   
        <p class="small-paragraph">{{ item.text }}</p> 
    </section>
</template>

<script>
export default{
    name:'UnderItem',
    props: {
        item: Object
    }
}
</script>

<style scoped>

</style>