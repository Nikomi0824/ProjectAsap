<template>
    <section class="contener under">
        <itemUnderBlock  v-for="item in unders" :key="item.id" :item="item"></itemUnderBlock>
    </section>
</template>

<script>
import itemUnderBlock from './itemUnderBlock.vue';
export default{
    name:"UnderBlock",
    components:{
        itemUnderBlock,
        
    },
    data: () => {
        return {
            unders: [
                {
                    img: '/Image/star.png',
                    title: 'The first',
                    text: 'Learn To Love Growth And Change And You Will Be A Success',
                },
                {
                    img: '/Image/Mask.png',
                    title: 'Second',
                    text: 'An Ugly Myspace Profile Will Sure Ruin Your Reputation',
                },
                {
                    img: '/Image/Shape.png',
                    title: 'Third',
                    text: 'The Small Change That Creates Massive Results In Your Life',
                }
            ]
        }
    }
}
</script>

<style scoped>
.under{
    display: flex;
    flex-direction: row;
    margin-top: 200px;
    margin-bottom: 100px;
    
}
</style>