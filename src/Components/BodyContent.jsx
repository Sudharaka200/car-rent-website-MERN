import React from 'react'

function BodyContent(props) {
  return (
    <div className="lg:p-20">
        <h1 className='text-center m-5 text-4xl '>{props.title}</h1>
        {props.children}
    </div>
  )
}

export default BodyContent
