<template>
  <div id="app">
    <HeaderItem></HeaderItem>
    <Information></Information>
    <Skills></Skills>
    <Slider></Slider>
    <LastPost class="LastPost-Block"></LastPost>
    <Contact></Contact>
    <FooterBlock></FooterBlock>


  </div>
</template>

<script>
import LastPost from './components/lastPost.vue';
import HeaderItem from './components/header.vue';
import Information from './components/Information.vue';
import FooterBlock from './components/footer.vue';
import Skills from './components/Skills.vue';
import Slider from './components/slider.vue';
import Contact from './components/contact.vue';

export default {
  components: {
    Information,
    LastPost,
    HeaderItem,
    FooterBlock,
    Skills,
    Slider,
    Contact,
  }

}
</script>

<style>
@import "./assets/gloabal.css";
</style>
<style scoped>
.LastPost-Block {
  margin-bottom: 200px;
}
</style>
