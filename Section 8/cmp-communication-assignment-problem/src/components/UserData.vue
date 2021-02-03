<template>
    <form>
        <div>
            <label>Name</label>
            <input type="text" v-model="enteredName" />
        </div>
        <div>
            <label>Age</label>
            <input type="text" v-model="enteredAge" />
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            enteredName: '',
            enteredAge: ''
        };
    }
}
</script>