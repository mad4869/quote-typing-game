import { useContext } from "react"

import { QuoteContext } from "./contexts/QuoteContext"

const Error = () => {
    const { error } = useContext(QuoteContext)

    return (
        error &&
        <div className="error"><p>{error.message}</p></div>
    )
}

export default Error
