import utils from "../utils"

export default defineEventHandler(async (event) => {
    const params = useQuery(event)
    const response = await utils.request("/articles", params)
    const result = utils.response(response).data
    return {
        list: result.list || [],
        more: result.more || false,
    }
})
