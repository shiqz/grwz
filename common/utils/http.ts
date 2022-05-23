class Http {
    constructor() {

    }

    handler (url: string, data: any = {}, method: string = "GET", extra: any = {}) {
        const options = {
            baseURL: useRuntimeConfig().public.apiBase,
            method: method,
            params: {},
            data: {},
            headers: {
                
            }
        }
        Object.assign(options, extra)
        method == "GET" ? options.params = data : options.data = data
        return $fetch(url, options)
    }
}

export default new Http()