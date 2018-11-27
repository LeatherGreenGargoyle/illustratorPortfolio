import React from 'react'
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
      <p className={'eventTitle'}>{eventObj.galleryName}</p>
      <div className={'eventImagesContainer'}>
        {eventObj.imageURLs.map(imageUrl => EventImage(imageUrl, eventObj.imageURLs.length - 1))}
      </div>
      <p className={'eventCaption'}>{eventObj.dateStr}</p>
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
  const imgClass = numberOfSiblings === 0 ? 'eventImageSingle' : 'eventImage'
  return (
    <img
      src={imageURL}
      className={imgClass}
    ></img>
  )
}