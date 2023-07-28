'use strict'

const { createApp } = Vue

createApp({
    data() {
        return {
            mailList: [],
            counter: null,
        }
    },
    
    methods: {},

    mounted() {
        for (let i = 0; i < 10; i++) {
            this.counter++;
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(axiosResp => {   
                    this.mailList.push(axiosResp.data.response)
                })
        }
    }
    }
).mount('#app')