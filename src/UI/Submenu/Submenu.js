import React from 'react'
import { Link } from 'react-router-dom'

const Submenu = (props) => {
  const getLinkList = () => {
    return props.links.map((linkObject, index) => {
      if (linkObject.linkRoute) {
        return (
          <li
            style={{ color: props.currentSelectedSubmenuItem === linkObject.itemTag ? 'grey' : 'black' }}
            key={index}
            onClick={() => {
              linkObject.callback()
            }}
          >
            <Link to={linkObject.linkRoute}>
                {linkObject.title}
            </Link>
          </li>
        )
      } else {
        return (
          <li
            style={{ color: props.currentSelectedSubmenuItem === linkObject.itemTag ? 'grey' : 'black' }}
            key={index}
            onClick={ () => {
              this.onSubmenuItemClick(linkObject.title)
              linkObject.callback()
            }}
          >
            {linkObject.title}
          </li>
        )
      }
    })
  }

  return (
    <ul className={"submenu"} style={{ listStyleType: "none", marginBottom: "0em" }}>
      {getLinkList()}
    </ul>
  )
}

const SubmenuItem = (title, linkRoute, callback, itemTag) => {
  return {
    title,
    callback: callback,
    linkRoute: linkRoute,
    itemTag: itemTag
  }
}

export {
  Submenu,
  SubmenuItem
}