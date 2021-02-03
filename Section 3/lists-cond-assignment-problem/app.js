const app = Vue.createApp ({
    data() {
        return {
            tasks: [],
            enteredTask:'',
            tasksVisibility: true
        };
    },
    computed: {
        buttonCaption() {
            return this.tasksVisibility ? 'Hide List' : 'Show List';
        }
    },
    methods:{
        addTask() {
            this.tasks.push(this.enteredTask);
        },
        toggleVisibility() {
            this.tasksVisibility = !this.tasksVisibility;
        }
    }
});

app.mount('#assignment')