<template>
  <div class="contener last-post">
    <h2>Last posts</h2>
    <div class="top"><a href="#">ALL POSTS</a></div>
    <div class="ItemPosts">
      <itemPost v-for="(item, index) in posts.content" :key="index" :item="item"></itemPost>
    </div>
  </div>
</template>

<script>
import itemPost from '@/components/itemPost.vue'
export default {
 name:'LastPost',
 components:{
  itemPost,
 },
 data: () => {
    return {
      posts: {}
    }
  }, 
  mounted() {
    this.axios
      .get('/api/data.json')
      .then(response => {
        this.posts = response.data.posts;
      })
      .catch(error => {
        console.log(error);
      })
  }
}

</script>

<style scoped>

.top{
  display: flex;
  justify-content: end;
  margin: 52px 0 48px;

}
h2{
  display: flex;
  align-items: center;
  justify-content: center;
}
.ItemPosts .last-posts-section{ 
  margin-bottom: 50px;
}
</style>
