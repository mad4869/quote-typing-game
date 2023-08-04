import { useState, useEffect, useCallback } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

import Text from "./Text"

const Content = () => {
    const [targetText, setTargetText] = useState('')

    const fetchData = async (): Promise<Quote[]> => {
        const { data } = await axios.get('https://type.fit/api/quotes')
        return data
    }

    const { isLoading, error, data } = useQuery<Quote[], Error>({
        queryKey: ['Typing'],
        queryFn: fetchData,
        staleTime: 60000,
        refetchOnMount: false
    })

    const randomizeText = useCallback(() => {
        const index = Math.floor(Math.random() * (data?.length ?? 0))
        return data?.[index]?.text ?? ''
    }, [data])

    useEffect(() => {
        if (!isLoading) {
            setTargetText(randomizeText())
        }
    }, [isLoading, randomizeText])

    return (
      <main>
        <section>
          {
              error ?
              <Text content={error.message} /> :
              <Text content={targetText} />
          }
        </section>
      </main>
    )
}

export default Content
