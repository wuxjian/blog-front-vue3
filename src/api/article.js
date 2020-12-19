import request from '@/utils/request'

export function saveArticle(article) {
    return request({
        url: '/article',
        method: 'post',
        data: article
    })
}

export function fetchList(query) {
    return request({
        url: '/article/list',
        method: 'get',
        params: query
    })
}

export function fetchClientList(query) {
    return request({
        url: '/article/client/list',
        method: 'get',
        params: query
    })
}

export function fetchArticle(id) {
    return request({
        url: `/article/detail/${id}`,
        method: 'get'
    })
}

export function fetchClientArticle(id) {
    return request({
        url: `/article/client/detail/${id}`,
        method: 'get'
    })
}

