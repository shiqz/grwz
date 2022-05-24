import utils from "../utils"

const articles = async (params: any = {}) => {
    const data = await utils.request("/articles", { page: params.page })
    const result = utils.response(data);
    return result.data
}

export default defineEventHandler((event) => {
    return articles(useQuery(event))
})
