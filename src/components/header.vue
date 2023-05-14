<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->

<template>
  <header class="contener">
    <img src="/Image/Logo.png" alt="logo">
                <input id="toggle" type="checkbox">

                <label for="toggle" class="hamburger">
                <div class="top-bun"></div>
                <div class="meat"></div>
                <div class="bottom-bun"></div>
    </label>
    <nav class=" link ">
         <router-link   
         v-for="(item, index) in links" :key="index" :to=item.url
         >{{ item.label }}</router-link>
    </nav> 
  </header>
</template>

<script>

export default {
    name: 'HeaderBlock',
    data: () => {
        return {
            links: [
                {
                    label: 'ABOUT',
                    url:  '/PageMainBlock#about'
                },
                {
                    label: 'SKILLS',
                    url: '/PageMainBlock#skills' 
                },
                {
                    label: 'SOCIAL',
                    url: { name: 'PageMainBlock'  , hash: 'social' }
                },
                {
                    label: 'CONTACTS US',
                    url: {name : 'PageMainBlock' , hash: 'contact' }
                },
                {
                    label: 'BLOG',
                    url: {name : 'PagBlog'  },
                    
                }
            ],
            
        }
    },
    
}
</script>

<style scoped>
#toggle {
  display: none;
}
header{
    display: flex;
    padding: 20px auto 20px;
    align-items: center;
    justify-content: space-between;
}


a {
    margin-right: 20px;
}
@media screen and (max-width :940px) {
    
    .link{
        display: none;
    }
    .hamburger {
      position: absolute;
      top: 5em;
      right: 5%;
      margin-left: -2em;
      margin-top: 0px;
      width: 2em;
      height: 45px;
      z-index: 5;
    }

    .hamburger div {
      position: relative;
      width: 3em;
      height: 7px;
      border-radius: 3px;
      background-color: #5C33B9;
      margin-top: 8px;
      transition: all 0.3s ease-in-out;
    }
 }


</style>
