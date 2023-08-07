import { createContext } from 'react'

export const QuoteContext = createContext({} as {
    isLoading: boolean,
    error: Error | null,
    data: Quote[] | undefined
})