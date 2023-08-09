import { useCallback } from 'react'

const useRandomizeText = (data: Quote[] | undefined) => {
    const randomizeText = useCallback((prevText: string) => {
        if (data?.length === 0) {
            return ''
        } else {
            let index = Math.floor(Math.random() * (data?.length ?? 0))
            let newText = data?.[index]?.text

            while (newText === prevText) {
                index = Math.floor(Math.random() * (data?.length ?? 0))
                newText = data?.[index]?.text
            }

            return newText
        }
      }, [data])

    return randomizeText
}

export default useRandomizeText
