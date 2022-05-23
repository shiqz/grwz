import http from "~~/common/utils/http";

const defaultMessage = (status, message) => {
    if (message != '') {
        return message
    }
    if (status) {
        return 'success'
    }
    return '服务器繁忙，请重试';
}

export default {
    response (response: any) {
        const result = { status: true, data: [], message: 'success' }
        result.status = (response.code || 500) == 200
        result.message = defaultMessage(response.msg || '', result.status)
        if (!result.status) {
            console.error(response)
        }
        result.data = response.data || []
        return result
    },
    defaultServerHeader () {
        return {
            API_SECRET: useRuntimeConfig().apiSecret
        }
    },
    setHeader (header:any = {}) {
        return Object.assign(header, this.defaultMessage())
    },

    request(url:string, data:any = {}, method:string = 'POST', extra:any = {}) {
        extra.header = this.setHeader(extra.header || {})
        return http.handler(url, data, method, extra)
    }
}