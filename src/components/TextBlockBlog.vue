<template>
    <section class="contener outsate">
        <h2>Title text block</h2>
        <p class="small-paragraph">
            text block text block text block text block text block 
            text block text block text block text block text block 
        </p>
        <button >contacts us</button>
    </section>
</template>

<script>
export default{
    name:'TextBlockBlog',

}
</script>

<style scoped>
.outsate{
    border: 1px solid #E1E5EE;
    border-radius: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
}
h2{
    margin-top: 46px;
    margin-bottom: 20px;
}
.outsate p{

    width: 350px;
    margin-bottom: 39px;
}
button{
    height: 46px;
    width: 160px;
    left: 0px;
    top: 0px;
    border-radius:4px ;
    border: 4px solid #6E38F7;
    background: #6E38F7;
    color: white;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    cursor: pointer;
    margin-bottom: 49px;
}

</style>