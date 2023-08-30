<script setup lang="ts">
import Hello from "./components/HelloWorld.vue";
import Students from "./components/Students.vue";
import Add from "./components/Add.vue"
</script>

<template>
<RouterView/>
<Students></Students>
<Add></Add>
<Hello></Hello>
</template>

<style scoped>
</style>
