<template>
    <div ref="box">
        <button @click="test">clice me</button>
        <hr>
        <div v-for="item in hello" key="item.id">
            {{ item.id }}---{{ item.anwei }}
            <button @click="deleteItem(item.id)">X</button>
        </div>
        <div v-for=" in 50">占个位</div>
        <img class="f1" v-cym="imgSrc" alt="">
    </div>
</template>

<script setup lang="ts">

import { httpInstance } from "../utils/http";
import { ref } from "vue";
import { nanoid } from "nanoid";


let hello: any = ref([])

let imgSrc = 'https://assets-v2.porsche.cn/cn/-/media/Project/PCOM/SharedSite/OneHome/CarRange/911_Carrange.jpg?rev=753a29ebc1cd42ca83273731b5ad62c1&extension=webp&w=1760&q=65'

let test = function () {
    httpInstance.get('index.php?type=json').then((res) => {
        let helloItem = ref({
            id: nanoid(),
            anwei: res.data.anwei
        })
        hello.value.push(helloItem.value)
    })
}

let deleteItem = function (id: string) {
    console.log('执行删除操作', id);
}

</script>

<style scoped>
.f1{
    height: 400px;
}
</style>