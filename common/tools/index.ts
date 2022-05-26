import dayjs from 'dayjs'

export default {
    articleUrl (id: string) {
        return `/article/${id}.html`
    },
    formatDate (date: string) {
        return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
    },
    intval (page: any) {
        page = parseInt(page)
        if (isNaN(page)) {
            page = 1
        }
        return page
    }
}