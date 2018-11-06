import React from 'react'
import { Link } from 'react-router-dom'

const Submenu = (links) => {
  console.log(links)
  const linkList = links.map((linkObject, index) => {
    if (linkObject.linkRoute) {
      return (
        <li key={index}>
          <Link
              to={linkObject.linkRoute}
              onClick={() => linkObject.callback() }
          >
              {linkObject.title}
          </Link>
      </li>
      )
    } else {
      return <li key={index} onClick={ () => linkObject.callback() }>
        {linkObject.title}
      </li>
    }
  })

  return (
    <ul className={"submenu"} style={{ listStyleType: "none" }}>
      {linkList}
    </ul>
  )
}

const SubmenuItem = (title, linkRoute, callback) => {
  return {
    title,
    callback: callback,
    linkRoute: linkRoute
  }
}

export {
  Submenu,
  SubmenuItem
}