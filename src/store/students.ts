import { defineStore } from 'pinia'
import { ref } from "vue";
// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，
//同时以 `use` 开头且以 `Store` 结尾。
//(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export let useStudentsStore = defineStore('students', () => {
    let studentsList = ref([
        {
            id: '001',
            name: 'cym'
        },
        {
            id: '002',
            name: 'yy'
        },
        {
            id: '003',
            name: 'yyy'
        }
    ])
    let addStudent = function (id: string, name: string) {
        studentsList.value.push(
            {
                id,
                name
            })
    }
    return {
        studentsList,
        addStudent
    }
},
    {
        persist: true,
    })

