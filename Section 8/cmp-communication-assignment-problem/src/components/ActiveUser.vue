<template>
    <ul>
        <li>
            <strong>User Name:</strong>
            {{ userName }}
        </li>
        <li>
            <strong>Age:</strong>
            {{ userAge }}
        </li>
    </ul>
</template>

<script>
export default {
    props:['userName', 'userAge']
}
</script>

