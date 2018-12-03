import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { portraitURLs, landscapeURLs } from '../Constants'
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

    // <div className={'eventContainer'}>
    //   <p className={'eventTitle'}>{eventObj.galleryName}</p>
    //   <div className={'eventImagesContainer'}>
    //     {eventObj.imageURLs.map(imageUrl => EventImage(imageUrl, eventObj.imageURLs.length - 1))}
    //   </div>
    //   <p className={'eventCaption'}>{eventObj.dateStr}</p>
    // </div>
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
  } else if (portraitURLs.indexOf(imageURL) != -1) {
    imgClass = 'eventImagePortrait'
  } else {
    imgClass = 'eventImageLandscape'
  }
  // const imgClass = numberOfSiblings === 0 ? 'eventImageSingle' : 'eventImage'
  return (
    <img
      src={imageURL}
      className={imgClass}
    ></img>
  )
}
