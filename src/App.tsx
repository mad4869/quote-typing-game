import { QueryClientProvider, QueryClient } from 'react-query'

import Title from './components/layout/Title'
import Content from './components/layout/Content'
import Footer from './components/layout/Footer'

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
