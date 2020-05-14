export let baseUrl = 'http://qa-gunicorn.imepaas.enncloud.cn' // qa
baseUrl = '/api'
if (process.env.VUE_APP_CURRENTMODE === 'qa') {
    baseUrl = 'http://qa-gunicorn.imepaas.enncloud.cn' // qa
} else if (process.env.VUE_APP_CURRENTMODE === 'production') {
    baseUrl = 'https://lk-dn-ai-qa-gunicorn-prod.op.laikang.com' // pro
}

export const queryDataList = '/dataset/query'
