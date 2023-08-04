import { QueryClientProvider, QueryClient } from 'react-query'

import Title from './components/Title'
import Content from './components/Content'

const appClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={appClient}>
      <Title />
      <Content />
    </QueryClientProvider>
  )
}

export default App
