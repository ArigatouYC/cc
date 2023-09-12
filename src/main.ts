import { createApp } from 'vue'
// import './style.css'

//element深色模式
import 'element-plus/theme-chalk/dark/css-vars.css'

import App from './App.vue'

import { useIntersectionObserver } from '@vueuse/core'
import { createPinia } from 'pinia'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

let app = createApp(App)

//懒加载指令
app.directive('cym', {
    mounted(el, binding) {
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                if(isIntersecting){
                    // console.log(binding.value);
                    el.src = binding.value
                }
            },
        )
    }
})

const pinia = createPinia()

app.use(pinia)
pinia.use(piniaPluginPersistedstate)

//最后在挂载app！！！！
app.mount('#app')