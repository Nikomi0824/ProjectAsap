<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->

<template>
  <header class="contener">
    <img src="/Image/Logo.png" alt="logo">
    <img class="burger-menu" :class="{ 'opened': menuIsShow }" :src=" menuIsShow === false ? '/Image/line.png' : '/Image/Crest.png'" @click="toggleMenu">
    <nav class=" link " :class="{ 'active': menuIsShow }">
             <router-link  
             v-on:click="Unshow" 
            v-for="(item, index) in links" :key="index" :to=item.url
            >  {{ item.label }}</router-link>
       
        
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
                    url: { name: 'PageMainBlock', hash: '#ABOUT' }
                },
                {
                    label: 'SKILLS',
                    url: { name: 'PageMainBlock', hash: '#SKILLS' } 
                },
                {
                    label: 'SOCIAL',
                    url: { name: 'PageMainBlock' , hash: '#SOCIAl' }
                },
                {
                    label: 'CONTACTS US',
                    url: {name : 'PageMainBlock' , hash: '#CONTACTS' }
                },
                {
                    label: 'BLOG',
                    url: {name : 'PagBlog'  },
                    
                }
            ],
            menuIsShow: false,
            
        }
    },
    methods:{
        Unshow(){
            this.menuIsShow = false;
        },
        toggleMenu() {
            this.menuIsShow = !this.menuIsShow
        }
    }
    
}
</script>

<style scoped>

header{
    display: flex;
    padding: 20px auto 20px;
    align-items: center;
    justify-content: space-between;
}
.burger-menu{
    display: none;
}

a {
    margin-right: 20px;
}
@media screen and (max-width :940px) {
    
   
        .burger-menu {
            display: block;
            height: 12px;
            width: 16px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

       

        header {
            background: #ffffff;
        }
        nav {
            display: none;
        }
        nav.active  {
            display: flex;
            flex-direction: column;
            position: fixed;
            background: #ffffff;
            top: 76px;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            padding: 15px;
            align-items: center;
        }
}
    
      
 

</style>
