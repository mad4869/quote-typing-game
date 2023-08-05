import React from "react"

const Highlighted: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="highlighted">
      {children}
    </span>
  )
}

export default Highlighted
