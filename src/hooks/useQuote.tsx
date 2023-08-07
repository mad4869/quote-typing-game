import { useQuery } from 'react-query'
import axios from 'axios'

const useQuote = () => {
    const fetchData = async ():Promise<Quote[]> => {
        const { data } = await axios.get('https://type.fit/api/quotes')
        return data
      }
    
      const { isLoading, error, data } = useQuery<Quote[], Error>({
        queryKey: ['Quote'],
        queryFn: fetchData,
        staleTime: 60000,
        refetchOnMount: false
      })

    return { isLoading, error, data }
}

export default useQuote
