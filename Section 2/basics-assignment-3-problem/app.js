const app = Vue.createApp ({
    data() {
        return {
            result: 0
        };
    },
    watch: {
        result(value) {
            if (value != 0){
                const that=this;
                setTimeout(function(){
                    that.result = 0;
                },5000);
            }
        }
    },
    computed: {
        finalResult() {
            if (this.result<37){
                return 'Not there yet!';
            }else if (this.result === 37) {
                return this.result;
            }else {
                return 'Too much!';
            }
        }
    },
    methods: {
        add(num) {
           this.result = this.result + num;
        }
    }
});

app.mount('#assignment')