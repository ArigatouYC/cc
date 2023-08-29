import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { useIntersectionObserver } from '@vueuse/core'

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
//最后在挂载app！！！！
app.mount('#app')