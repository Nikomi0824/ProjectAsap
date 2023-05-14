<template>
    <section class="contener Blog-section">
        <div class="left"><img alt="Blog" class="img-Blog" src="/Image/last-post.png" /></div>
        <div class="rigth">
            <h4>{{ item.title }}</h4>
            <p class="paragraf">{{ item.description }}</p>
            <div class="botton">
                <p class="small-paragraph">{{ item.date }}</p>
                <a :href="item.link">Read More </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BlogItem',
    props: {
        item: Object
    }
}
</script>

<style scoped>
.Blog-section {
    display: flex;
    flex-direction: row;
    overflow: hidden;
}

.botton {
    display: flex;
    justify-content: space-between;

}

.img-Blog {
    height: 270px;
    width: 440px;
    margin-right: 40px;
}

h4 {
    margin: 20px 0 20px;
}

.rigth {
    display: flex;
    flex-direction: column;
}

.rigth p {
    margin-bottom: 72px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
}

@media screen and (max-width :940px) {
    .Blog-section {
        width: 100%;
        height: auto;
        flex-direction: column;
        flex-wrap: wrap;

    }

    .rigth .img-Blog {
        height: 218px;
        width: 100%;
        left: 0px;
        top: 0px;
        border-radius: 0px;
        flex: none;
    }

    .img-Blog {
        margin-bottom: 17px;
        width: 100%;
    }

    h4 {
        margin-bottom: 16px;
    }

    .rigth p {
        margin-bottom: 25px;
        line-height: 22px;

    }
}</style>