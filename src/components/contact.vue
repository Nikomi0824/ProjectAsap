<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
 <section class="Form contener">
    <h2>Contact us</h2>
    <p class="small-paragraph">
        Life is 10% what happens to you and 90% how you react to it. It does not matter how slowly you go as long as you do not stop. Confucius.
    </p>
    <form>
        <div class="Input">
            <input  v-on:change="NameInput" v-model="Name" :class="{ 'errorName': errorName }" placeholder="Your name">
            <input v-on:change="EmailInput" v-model="Email" :class="{ 'errorEmail': errorEmail }" placeholder="Email">
        </div>
        <textarea v-on:change="Conclusion" v-model="Text" placeholder="Description (optional)"></textarea>
        <button v-on:click="Conclusion">send</button>
    </form>
    
 </section>
</template>

<script>
 export default{
    name:'ContactBlock',
    data() {
        return {
            errorEmail: false,
            errorName: false,
            Name: '',
            Email: '',
            Text: '',
            success:'',
            restrictedVal: ["SLAVA", "All", "HOme", "AAA"]
        }
    },
    methods: {
     
        NameInput() {
            const re = /[^a-zA-Zа-яА-Я ]/ui
            this.errorName = re.test(this.Name)
        },
        EmailInput() {
            this.errorEmail =! new RegExp("^((([0-9A-Za-z]{1}[-0-9A-z\\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\\.){1,}[-A-Za-z]{2,})$"
            ).test(this.Email)
        },
        TextInput() {
            for (let i = 0; i < this.restrictedVal.length; i++) 
            { this.Text = this.Text.replaceAll(this.restrictedVal[i], '*') }
        },
        Conclusion() {
            this.axios
                .post('https://jsonplaceholder.typicode.com/posts', { Name: this.Name, Email: this.Email, Text: this.Text })
                .then((response) => {
                    this.success = response.status
                    console.log(this.success)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
 }
 
</script>

<style scoped>
.errorEmail{
    background-color: red;
}
.errorName{
    background-color: red;
}
.Form h2{
    margin-bottom: 20px;
}
.Form p{
    margin-bottom: 40px;
    text-align: center;
    max-width: 620px;
}
.Form{
    display: flex;
    flex-direction: column;
    align-items: center;
}
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 460px;
    max-width: 100%;
    margin: 0 auto;
}
.Input{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 100%;
}
input{
    border: 1px solid #CAD1E1;
    border-radius: 4px;
    width: 220px;
    height: 46px;
}
@media (max-width :940px) {
    .Input input{
        width: 100%;
        margin-bottom: 20px;
    }
}

textarea{
    height: 122px;
    left: 0px;
    top: 0px;
    border-radius: 4px;
    width: 460px;
    margin-bottom: 30px;
}
button{
    height: 46px;
    width: 160px;
    left: 0px;
    top: 0px;
    border-radius:4px ;
    border: 4px solid #6E38F7;
    background: #6E38F7;
    color: white;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    cursor: pointer;
    margin-bottom: 100px;
}
@media (max-width :940px) {
    .Input{
        flex-direction: column;
    }
    button{
        width: 100%;
    }
    .Form{
        width: 100%;
    }
    textarea{
        width: 100%;
    }
}
</style>