export const baseURL = process.env.NODE_ENV === "production" ?
    'http:production.com' //如果是生产环境
    :
    '' //开发环境,如果设置了代理,这里就写一个空字符串,如果没设置,就写开发环境url