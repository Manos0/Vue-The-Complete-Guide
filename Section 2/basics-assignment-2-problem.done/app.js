const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            confirmedUserinput: ''
        }

    },
    methods: {
        confirmInput(event) {
            this.confirmedUserinput ='   '+this.userInput;
        },
        userKey(event) {
            this.userInput ='   '+event.target.value;
        },
        alertM(){
            alert('What are you doing!!??');
        }
    }
    
});

app.mount('#assignment');