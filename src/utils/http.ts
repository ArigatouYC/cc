import axios from "axios";

export let httpInstance = axios.create({
    baseURL: 'https://v.api.aa1.cn/api/api-wenan-anwei/',
    timeout: 5000
})

httpInstance.interceptors.request.use(config => {
    return config
}, (e) => { Promise.reject(e) })

httpInstance.interceptors.response.use(
    // 在这里定义成功响应的处理逻辑
    (response) => {
        // 必须返回响应对象，否则下一个 then 将无法拿到 response 参数
        return response
    },
    // 在这里定义失败响应的处理逻辑
    (error) => {
        // 必须返回一个拒绝的 Promise，否则下一个 then 将无法拿到 error 参数
        return Promise.reject(error)
    },

);