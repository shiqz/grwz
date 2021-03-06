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
                'Content-Type': 'application/json'
            }
        }
        Object.assign(options, extra)
        method == "GET" ? options.params = data : options.data = data
        console.log(JSON.stringify(options))
        return $fetch(url, options)
    }
}

export default new Http()