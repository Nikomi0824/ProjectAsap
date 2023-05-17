<template>
    <section>
        <div class="right contener">
            <div class="top">
                <h1>My post</h1>
                <p class="paragraf postPararagraf">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                </p>
            </div>
        </div>
        <img   clsss="IMG_INFO_BLOCK"  src="/Image/me.jpg" alt="foto">
    </section>
</template>

<script>
export default{
    name:'MyPostBlock'
}

</script>


<style scoped>

.postPararagraf {
    width: 300px;
}

img {
    position: absolute;
    top: 0;
    right: 0;
    width: 550px;
    height: 100%;
    object-fit: cover;
    height: 723px;
}

section {
    height: 723px;
    padding: 215px 0 80px;
    position: relative;
}

section h1 {
    margin-bottom: 106px;
}

section p {
    margin-bottom: 213px;
}

section a {
    margin-bottom: 80px;
}

@media screen and (max-width :940px) {
    section h1 {
        margin-bottom: 15px;
        margin-top: 54px;
    }

    section p {
        margin-bottom: 30px;
    }

    section a {
        margin-bottom: 26px;
    }

    img {
        position: relative;
        height: 413px;
        width: 100%;
        left: 0px;
        top: 0px;
        border-radius: 0px;
        margin: 26px 16px 0;
    }

}</style>