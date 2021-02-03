<template>
    <h2>Magage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <telport to="body">
        <error-alert v-if="inputIsInvalid">
            <h2>Input is invalid!</h2>
            <p>Please enter at leaset a few characters...!</p>
            <button @click="confirmedError">Okay</button>
        </error-alert>
    </telport>  
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
    components: {
        ErrorAlert
    },
    data () {
        return {
            inputIsInvalid: false
        };
    },
    methods: {
        setGoal() {
            const enteredValue = this.$refs.goal.value;
            if (enteredValue === '') {
                this.inputIsInvalid = true;
            }
        },
        confirmedError() {
            this.inputIsInvalid = false;
        }
    }
}
</script>