import React from 'react'

function BodyContent(props) {
  return (
    <div className="lg:p-20">
        <h1>{props.title}</h1>
        {props.children}
    </div>
  )
}

export default BodyContent
