<!-- eslint-disable vue/no-multiple-template-root -->
<!-- eslint-disable vue/valid-template-root -->

<template>
    <section class="contener last-posts-section">
        <div class="left"><img  alt="last-post" class="img-last-post" src="/Image/last-post.png"/></div>
        <div class="rigth">
          <h4>{{item.title}}</h4>
          <p class="paragraf">{{item.description }}</p>
          <div class="botton">
            <p class="small-paragraph">{{ item.date }}</p>
           <router-link :to="{ name: 'MyPostVue', params: { id: 313 } }">Read More </router-link>
          </div>
        </div>
    </section>    
</template>

<script>
export default {
    name: 'PostItem',
    props: {
        item: Object
    }
}
</script>

<style scoped>
.last-posts-section{
    display: flex;
    flex-direction: row;
    overflow: hidden;
}
.botton{
    display: flex;
    justify-content: space-between;
    
}
.img-last-post{
    height: 270px;
    width: 440px;
    margin-right: 40px ;
}
h4{
    margin: 20px 0 20px;
}
.rigth{
    display: flex;
    flex-direction: column;
}
.rigth p{
    margin-bottom: 72px;
    overflow: hidden;
   display: -webkit-box;
   -webkit-line-clamp: 3; 
           line-clamp: 3; 
   -webkit-box-orient: vertical;
}
@media screen and (max-width :940px) { 
    .last-posts-section{
        width: 100%;
        height: auto;
        flex-direction: column;
        flex-wrap: wrap;
        
    }
    .rigth .img-last-post{
        height: 218px;
        width: 100%;
        left: 0px;
        top: 0px;
        border-radius: 0px;
        flex: none;
    }
    .img-last-post{
        margin-bottom: 17px;
        width: 100%;
    }
    h4{
        margin-bottom: 16px;
    }
    .rigth p{
    margin-bottom: 25px;
    line-height: 22px;

    }
}

</style>