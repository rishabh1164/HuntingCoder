import React from 'react'

const Dummy = () => {
  return (
    <>
    <style jsx global>
        {`
        .dummy {
        background: yellow;
        }
        `}
    </style>
    <p className='dummy'>I am Dummy</p>
    </>
  )
}

export default Dummy