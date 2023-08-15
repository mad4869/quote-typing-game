import { useCallback } from 'react'

const useRandomizeText = (data: Quote[] | undefined) => {
    const randomizeText = useCallback((prevText: string = '') => {
        if (data?.length === 0) {
            return ''
        } else if (data?.length === 1) {
            return prevText
        } else {
            let index = 0
            let newText = ''
            do {
                index = Math.floor(Math.random() * (data?.length ?? 0))
                newText = data?.[index]?.text ?? ''
            } while (newText === prevText)

            return newText
        }
      }, [data])

    return randomizeText
}

export default useRandomizeText
