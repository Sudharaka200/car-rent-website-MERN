import React from 'react'

function Menulinks(props) {
  return (
    <div>
      <li>
        <a className="text-gray-500 transition hover:text-gray-500/75" href={props.url}> {props.linkName} </a>
      </li>
    </div>
  )
}

export default Menulinks
