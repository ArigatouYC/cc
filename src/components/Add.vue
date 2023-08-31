<template>
    <div>
        <h3 class="add">你现在的位置是：{{ address.province }}-{{ address.city }}</h3>
    </div>
</template>

<script setup lang="ts">
import { getAddByIP } from "../utils/getAdd";
import { ref, onMounted } from "vue";

let address: any = ref({})

onMounted(() => {
    getAdd()
})

let getAdd = async function () {
    address.value = await getAddByIP()
    // console.log(address.value);
}
</script>

<style scoped>
.add {
    color: pink;
}
</style>