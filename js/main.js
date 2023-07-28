'use strict'

const { createApp } = Vue

createApp({
    data() {
        return {
            mailList: [],
            counter: null,
        }
    },
    mounted(){

        for (let i = 0; i < 10; i++) {
            this.counter++;
            console.log(this.counter)
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(axiosResp =>{
                if(this.counter = 10)
            })
        }
        
    }
}).mount('#app')