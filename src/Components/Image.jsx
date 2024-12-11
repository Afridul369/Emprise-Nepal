import React from 'react'

const Image = ({className,imgSrc,imgAlt}) => {
  return (
    <>
    <div className={`${className}`}>
        <img src={imgSrc} alt={imgAlt} />
    </div>
    </>
  )
}

export default Image