import React from 'react'

const Footer = () => {
  return (
    <div  className='w-[100%]  text-center py-2 bg-[#FC9B4D] px-4'>
      { `All Rights Reserved Farhan Yousaf @.  ${new Date().getFullYear().toString()}`}
    </div>
  )
}

export default Footer
