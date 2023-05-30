<template>
  <div class="contener last-post">
    <h2>Last posts</h2>
    <div class="top"><router-link :to="{ name: 'PagBlog' }">ALL POSTS</router-link></div>
    <div class="ItemPosts">
      <itemPost v-for="(item, index) in PostStore.content" :key="index" :item="item"></itemPost>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import itemPost from '@/components/itemPost.vue'

export default {
 name:'LastPost',
 components:{
  itemPost,
 },
  computed: {
    ...mapGetters([
      'PostStore'
    ]),
  },
  methods: {
    ...mapActions([
      'AxsiosStorePost'
    ])
  },
  mounted() {
    this.AxsiosStorePost()
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
