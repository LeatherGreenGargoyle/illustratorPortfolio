import React from 'react'
import { portraitURLs } from '../Constants'
import './Events.css'

export const Events = (eventObjs) => {
  return (
    <div className={'eventsPageContainer'}>
      { eventObjs.map(eventObj =>  EventSection(eventObj)) }
    </div>
  )
}

const EventSection = (eventObj) => {
  return (
    <div className={'eventContainer'}>
      <div className={'imageRow'}>
        {eventObj.imageURLs.map(imageUrl => {
            return EventImage(imageUrl, eventObj.imageURLs.length - 1)
          })}
      </div>
      <div>
        <p className={'imageCaption'}>{eventObj.title} | {eventObj.galleryName} | {eventObj.dateStr}</p>
      </div>
    </div>
  )
}

export const Event = (title, imageURLs, galleryName, dateStr) => {
  return {
    title,
    imageURLs: imageURLs,
    galleryName,
    dateStr
  }
}

const EventImage = (imageURL, numberOfSiblings) => {
  let imgClass = ''
  if (numberOfSiblings === 0) {
    imgClass = 'eventImageSingle'
  } else if (portraitURLs.indexOf(imageURL) !== -1) {
    imgClass = 'eventImagePortrait'
  } else {
    imgClass = 'eventImageLandscape'
  }

  return (
    <img
      src={imageURL}
      className={imgClass}
      alt={"Postcard from gallery event."}
    ></img>
  )
}
