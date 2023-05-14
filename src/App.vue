<template>
  <div id="app">
    <nav>
      <Layout></Layout>
    </nav>
    <FooterBlock class="footerB"></FooterBlock>
  </div>
</template>

<script>
import Layout from './views/Layout.vue';
import FooterBlock from './components/footer.vue';

export default{
  components:{
  Layout,
  FooterBlock,
  }
}
</script>

<style>
@import "./assets/gloabal.css";

#app{
  font-family: Rubik;
}
.footerB{
  margin-bottom: 21px;
}
</style>
