import React from 'react'

const Submenu = (links) => {
  console.log(links)
  const linkList = links.map((linkObject, index) => {
    return <li key={index} onClick={ () => linkObject.callback() }>
      {linkObject.title}
    </li>
  })

  return (
    <ul className={"submenu"} style={{ listStyleType: "none" }}>
      {linkList}
    </ul>
  )
}

const SubmenuItem = (title, callback) => {
  return {
    title,
    callback: callback
  }
}

export {
  Submenu,
  SubmenuItem
}