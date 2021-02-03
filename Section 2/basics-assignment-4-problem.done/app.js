const app = Vue.createApp({
    data() {
        return {
            userClass: '',
            paragraphIsVisible: true,
            inputBackgroundColor: ''
        };
    },
    computed: {
        paraClasses() {
            return {
                user1: this.userClass === 'user1', 
                user2: this.userClass === 'user2',
                visible: this.paragraphIsVisible,
                hidden: !this.paragraphIsVisible
            }
        }
    },
    methods: {
        toggleParagraph() {
            this.paragraphIsVisible = !this.paragraphIsVisible;
        }
    }
});

app.mount('#assignment');