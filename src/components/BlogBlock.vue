<template>
    <div class="contener Blog">
        <h2>Blog</h2>
        <div class="ItemBlog">
            <itemBlog v-for="(item, index) in PostStore.content" :key="index" :item="item"></itemBlog>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import itemBlog from './itemBlog.vue';

export default {
    name: 'LastPost',
    components: {
        itemBlog,
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


h2 {
    display: flex;
    align-items: center;
    justify-content: center;
}

.ItemBlog .Blog-section {
    margin-bottom: 50px;
}
</style>
