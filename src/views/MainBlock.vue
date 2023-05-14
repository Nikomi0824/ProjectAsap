<template>
    <div class="PageMainBlock">
       <Information id="about"></Information>
       <Skills></Skills>
       <slider></slider>
       <lastPost></lastPost>
       <contact id="#contact"></contact>
    </div>
</template>


<script>
import Information from '@/components/Information.vue';
import Skills from '@/components/Skills.vue';
import slider from '@/components/slider.vue';
import lastPost from '@/components/lastPost.vue';
import contact from '@/components/contact.vue';

export default {
    name:'PageMainBlock',
    components: {
       Information,
       Skills,
       slider,
       lastPost,
       contact,
    }
}
</script>