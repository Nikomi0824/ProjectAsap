<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
 <section>
    <div class="right contener">
        <div class="top">
            <h1>I am Slava</h1>
            <p class="paragraf inInfPararagraf">{{ InformationsStore.title }}<br/>{{ InformationsStore.description }}</p>
        </div>
        <a>SCROLL TO MORE</a>
    </div>
    <img   clsss="IMG_INFO_BLOCK"  src="/Image/me.jpg" alt="foto">
 </section>
 
</template>
<script>
import {  mapActions, mapGetters } from 'vuex';



export default{
    name: 'InformationBlock',
    computed:{
        ...mapGetters([
            'InformationsStore'
        ]),
    },
    methods:{
        ...mapActions([
            'AxsiosStoreInformations'
        ])
    },
    mounted(){
        this.AxsiosStoreInformations()
    }
    
}
</script>

<style scoped>
.inInfPararagraf{
    width: 300px;
}
img{
    position: absolute;
    top: 0;
    right: 0;
    width: 550px;
    height: 100%;
    object-fit: cover;
    height: 723px;
}
section{
    height: 723px;
    padding: 215px 0 80px;
    position: relative;
}
section h1{
    margin-bottom: 106px;
}
section p{
    margin-bottom: 213px;
}
section a{
    margin-bottom: 80px;
}
@media screen and (max-width :940px) { 
    section h1{
        margin-bottom: 15px;
        margin-top: 54px;
    }
    section p{
        margin-bottom: 30px;
    }
    section a{
        margin-bottom: 26px;
    }
    img{
        position: relative;
        height: 413px;
        width: 100%;
        left: 0px;
        top: 0px;
        border-radius: 0px;
        margin: 26px 16px 0;
    }

}

</style>