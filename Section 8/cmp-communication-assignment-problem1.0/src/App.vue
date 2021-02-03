<template>
    <active-user :username="user.name" :userage="user.age"></active-user>
    <user-data @set-data="setUserData"></user-data>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: 'Manos Zappy',
                age: 29
            }
        };
    },
    methods: {
        setUserData(name, age) {
            this.user = {
                name: name,
                age: +age
            }
        }
    }
};
</script>