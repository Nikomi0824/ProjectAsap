<template>
    <section>
      <BlogBlock></BlogBlock>
      <Pagination></Pagination>
      
    </section>
</template>

<script>
import BlogBlock from '@/components/BlogBlock.vue';
import Pagination from '@/components/Pagination.vue';


export default{
    name: 'PagBlog',
    components:{
    BlogBlock,
    Pagination,
    
    }
}
</script>