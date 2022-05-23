import utils from "../utils"

const articles = async (params: any = {}) => {
    const page = params.page || 1
    const data = await $fetch(useRuntimeConfig().public.apiBase + "/articles?page=" + page, {
        headers: utils.setHeader()
    })
    const result = utils.response(data);
    return result.data
}

export default defineEventHandler((event) => {
    return articles(useQuery(event))
})
