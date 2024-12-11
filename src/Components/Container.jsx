import React from 'react'

const Container = ({className,children}) => {
  return (
    <>
    <div className={`max-w-Container mx-auto ${className}`}>{children}</div>
    </>
  )
}

export default Container