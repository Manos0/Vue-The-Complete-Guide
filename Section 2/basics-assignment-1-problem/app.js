const app = Vue.createApp({
    data() {
        return{
            name: 'Manos',
            age: 29,
            imageLink: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293__340.jpg'

        };
    },
    methods: {
        output() {
                return Math.random();
        }
    }
});

app.mount('#assignment');