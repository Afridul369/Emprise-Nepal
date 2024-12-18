import React from 'react'

const List = ({className,listitem}) => {
  return (
    <>
    <li className={`${className}`}>{listitem}</li>
    </>
  )
}

export default List