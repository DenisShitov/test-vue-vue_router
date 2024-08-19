export interface IHomeProps {
    page?: string
}

export interface ITender {
    id: number
    title: string
    description?: string
}

export interface ITendersData {
    data: ITender[]
    page_count: number
    page_number: number
    page_size: number
    total: number
}

export interface ITendersQueryError {
    message: string
}