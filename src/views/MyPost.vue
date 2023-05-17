<template>
    <div class="MyPost">
       <MyPostBlock></MyPostBlock>
       <TextBlockBlog></TextBlockBlog>
       <underTextBlock></underTextBlock>
    </div>
</template>


<script>
import MyPostBlock from '@/components/MyPostBlock.vue';
import TextBlockBlog from '@/components/TextBlockBlog.vue';
import underTextBlock from '@/components/underTextBlock.vue';

export default {
    name: 'MyPost',
    components: {
        MyPostBlock,
        TextBlockBlog,
        underTextBlock,
    }
}
</script>