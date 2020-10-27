export const baseURL = process.env.NODE_ENV === "production" ?
    'http://127.0.0.1:3000' //如果是生产环境
    :
    'http://127.0.0.1:3000' //开发环境,如果设置了代理,这里就写一个空字符串,如果没设置,就写开发环境url