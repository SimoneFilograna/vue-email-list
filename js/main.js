'use strict'

const { createApp } = Vue

createApp({
    data() {
        return {
            mailList: [],
        }
    },

    methods: {},

    mounted() {
        for (let i = 0; i < 10; i++) {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(axiosResp => {   
                    this.mailList.push(axiosResp.data.response)
                })
        }      
    }
    }
).mount('#app')