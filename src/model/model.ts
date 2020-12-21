export const title = '建指所向的个人博客'

export class ListQuery {
    constructor(public currentPage = 1, public pageSize = 10) {
    }
}

export interface Page {
    currentPage: number;
    totalPage: number;
}


export interface Article {
    id?: number;
    cover?: string;
    title?: string;
    summary?: string;
    created_at?: string;
    author?: string;
    comment_disabled?: string;
    content?: string;
    importance?: number;
    status?: string;
    updated_at?: string;
}
