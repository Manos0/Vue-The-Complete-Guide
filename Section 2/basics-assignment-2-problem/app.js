const app = Vue.createApp ({
    data(){
        return {
            name: ''
        }
    },
    methods: {
        showAlert() {
            alert('Submitted!!!');
        },
        userInput(event) {
            this.name = event.target.value;
        }
    }
});

app.mount('#assignment');