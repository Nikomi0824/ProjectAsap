<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
 <section class="slider">
    <div class="contener heading">
        <h2>{{ SladerStore.title }}</h2>
        <p class="paragraf">{{ SladerStore.subtitle }} </p>
    </div>
    <div class="Item">
        <img src="/Image/Left.png" class="left" alt="left">
        <div class="sliderItem contener"> 
            <div class="IMG_item" v-for="(slide, index) in SladerStore.content" :key="index">
                <img :src="slide.icon" :alt="SladerStore.link"/>
            </div>
        </div>
        <img src="/Image/Left.png" class="right" alt="right">
    </div>
 </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default{
    name:'SliderBlock',
     computed: {
        ...mapGetters([
            'SladerStore'
        ]),
    },
    methods: {
        ...mapActions([
            'AxsiosStoreSlader'
        ])
    },
    mounted() {
        this.AxsiosStoreSlader()
    }
}
</script>

<style scoped>
img{
    width: 100px;
}
.IMG_item{
    margin-right:20px ;
    height: 80px;
    border-radius: 4px;
    width: 140px;
    object-fit: cover;
}
.heading{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.heading h2{
    margin-bottom: 20px;
    margin-top: 200px;
}
.heading p{
    margin-bottom: 40px;
}
section{
    display: flex;
    flex-direction: column;
    align-items: center;
} 
.sliderItem{
    display: flex;
    justify-content: space-between;
}
.Item{
    width: 100%;
    display: flex;
    justify-items: space-between;
}
.slider{
    margin-bottom:100px ;
}
.right{
    transform: rotate(180deg);
}


</style>