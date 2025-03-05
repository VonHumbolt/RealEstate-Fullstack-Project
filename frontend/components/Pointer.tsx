import React from 'react'

function Pointer({isSelect} : {isSelect: boolean}) {
  return (
    <div className={`w-fit p-2 rounded-full ${isSelect ? 'bg-primary' : 'bg-white-100' }`} />
  )
}

export default Pointer