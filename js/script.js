Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            maxNumberMail: 10,
            eMails: [],
        },
        methods: {
            getRandomMail: function() {
                for(let i = 0; i < this.maxNumberMail; i++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail',
                    ).then((response) => { 
                        this.eMails.push(response.data.response)
                    
                    });
                }
            }
        },
        created: function() {
            this.getRandomMail();
        }
    }
);