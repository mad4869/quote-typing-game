import { QueryClientProvider, QueryClient } from 'react-query'

import Title from './components/Title'
import Content from './components/Content'
import Footer from './components/Footer'

const appClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={appClient}>
      <Title />
      <Content />
      <Footer />
    </QueryClientProvider>
  )
}

export default App
