<template>
    <div>
        切换深色主题模式
        <el-switch v-model="isDark" :active-action-icon="Moon" :inactive-action-icon="Sunny" />
    </div>
    <div>
        <button @click="test">clice me</button>
        <hr>
        <div v-for="item in hello" key="item.id" class="animate__animated animate__fadeInDown">
            {{ item.id }}---{{ item.anwei }}
            <button @click="deleteItem(item.id)">X</button>
        </div>

        <h1>页面滚动距离信息：</h1>
        <h2>横向滚动距离：{{ x }}</h2>
        <h2>纵向滚动距离：{{ y.toFixed() }}</h2>
        <h2>是否正在滚动：{{ isScrolling }}</h2>
        <h2>是否触顶：{{ arrivedState.top }}</h2>
        <h2>是否触底：{{ arrivedState.bottom }}</h2>
        <h2>滚动方向：{{ directions }}</h2>

        <el-button type="success" size="default" @click="switchDisplay">显示/隐藏</el-button>
            <div v-show="show" class="animate__animated animate__fadeInDown">
            <div v-for=" in 17">占个位</div>
        </div>
        <div>
            <img class="f1" v-cym="imgSrc" alt="">
        </div>

    </div>
</template>

<script setup lang="ts">

import { httpInstance } from "../utils/http";
import { onMounted, ref, watch } from "vue";
import { nanoid } from "nanoid";
import { useScroll } from "@vueuse/core";
import { Sunny, Moon } from '@element-plus/icons-vue'
import 'animate.css'


const { x, y, isScrolling, arrivedState, directions } = useScroll(window)

let hello: any = ref([])

let imgSrc = 'https://assets-v2.porsche.cn/cn/-/media/Project/PCOM/SharedSite/OneHome/CarRange/911_Carrange.jpg?rev=753a29ebc1cd42ca83273731b5ad62c1&extension=webp&w=1760&q=65'

let test = function () {
    httpInstance('index.php?type=json').then((res) => {
        let helloItem = ref({
            id: nanoid(),
            anwei: res.data.anwei
        })
        hello.value.push(helloItem.value)
    })
}

let show = ref(true)
let switchDisplay = function () {
    show.value = !show.value
}

let deleteItem = function (id: string) {
  ElMessageBox.confirm(
    'Are you sure delete?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
      draggable: true,
    },
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: `${id}----Delete completed`,
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: `${id}----Delete canceled`,
      })
    })
}

//深色模式动态切换
let html = document.documentElement
let isDark = ref(false)
let localDarkStatus = ref()

watch(isDark, () => {
    localStorage.setItem('darkStatus', isDark.value.toString())
    localDarkStatus.value = localStorage.getItem('darkStatus')
    if (localDarkStatus.value === 'true') {
        html.className = 'dark'
    } else {
        html.className = ''
    }
})

onMounted(() => {
    if (localStorage.getItem('darkStatus') === 'true') {
        isDark.value = true
        html.className = 'dark'
    } else {
        isDark.value = false
        html.className = ''
    }
})



</script>

<style scoped>
.f1 {
    height: 400px;
}

.animate__animated.animate__fadeInDown {
    --animate-duration: .6s;
}
</style>