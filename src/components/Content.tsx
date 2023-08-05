// import { useCallback, useMemo, ChangeEvent } from 'react'

// import { useQuery } from 'react-query'
// import axios from 'axios'

import Quote from "./Quote"
import Button from './Button'
// import Countdown from './Countdown'
// import InputField from './InputField'
// import Highlighted from './Highlighted'
// import Loading from "./Loading"

const Content = () => {
    return (
      <main>
        <section className="quote-container">
          <Quote content="We can do this!" />
        </section>
        <section className='toolbar'>
          <Button gameFinished={false} handleClick={() => console.log('Start Game')} />
          {/* <Loading /> */}
        </section>
      </main>
    )
}

export default Content
