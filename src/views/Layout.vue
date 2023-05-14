
<template>
    <section>
        <nav>
        <HeaderBlock></HeaderBlock>
        </nav>
        <router-view></router-view>
    </section>
</template>

<script>
import HeaderBlock from '@/components/header.vue';

export default{
    name:'LayoutBlock',
    components:{
        HeaderBlock,
    }
}
</script>