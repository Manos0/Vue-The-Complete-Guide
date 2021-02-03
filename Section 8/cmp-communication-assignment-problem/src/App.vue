<template>
    <section>
        <header>
            <h2>Active Users</h2>
        </header>
        <active-user
        v-for="user in users"
        :key="user.id"
        :id="user.id"
        :user-name="user.name"
        :user-age="user.age"
        ></active-user>
        <user-data></user-data>
    </section>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue'
import UserData from './components/UserData.vue'
export default {
  components: { ActiveUser, UserData },
    data() {
        return {
            users:[
                {
                    id:'manos',
                    name:'Manos',
                    age:'29'
                },
                {
                    id:'alex',
                    name:'Alexandros',
                    age:'28'
                }
            ]
        }
    }
}
</script>

<style>

</style>template