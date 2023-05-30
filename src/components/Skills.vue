<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
 <section class="contener" id="SKILLS">
    <h2>{{ SkillsStore.title }}</h2>
    <div class="Blocks">
        <div v-for="(item, index) in SkillsStore.content" :key="index"  :class="['ItemBlocks', { 'skills-item_active': index === activeIndex }]">
            <div  class="head">
            <h6>{{ item.key}}</h6>
              <button @click="Accordion(index)"><img :src="index === activeIndex ? '/image/minus.png' : '/image/plus.png'"></button>
            </div>
            <p v-show="index === activeIndex" class="paragraf">{{ item.value }}</p>
        </div>
    </div>
   
 </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default{
    name:'SkillsBlock',
    data:()=>{
        return{
            activeIndex: null,
        }
    } ,
    computed: {
        ...mapGetters([
            'SkillsStore'
        ]),
    },
    methods: {
        ...mapActions([
            'AxsiosStoreSkills'
        ]),
         Accordion(index) {
            if (this.activeIndex === index) {
                this.activeIndex = null
            } else {
                this.activeIndex = index
            }
        }
    },
    mounted() {
        this.AxsiosStoreSkills()
    }
}
</script>

<style scoped>
h2{
    text-align: center;
    margin-bottom: 40px;
}
h6{
    margin: 19px 0 19px 20px;
}
button{
    margin: 24px 24px 24px ;
    border: none;
    background: transparent;
    cursor: pointer;
}
.ItemBlocks p{
    margin: 20px;
    
}

.ItemBlocks{
    border: 1px solid #6E38F7;
    border-radius: 4px;
    margin: 20px;
}
.head{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}


</style>