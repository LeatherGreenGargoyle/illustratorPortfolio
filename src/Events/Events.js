import React from 'react'
import { portraitURLs } from '../Constants'
import { Row, Col } from 'react-bootstrap'
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
      <Row className={'imageRow'}>
        {
          eventObj.imageURLs.map(
            imageUrl => (EventImage(imageUrl, eventObj.imageURLs.length - 1) )
          )
        }
      </Row>
      <Row>
        <p className={'imageCaption'}>{eventObj.title} | {eventObj.galleryName} | {eventObj.dateStr}</p>
      </Row>
    </div>
  )
}

const EventImage = (imageURL, numberOfSiblings) => {
  let imgClass = ''
  let colClass = ''
  if (numberOfSiblings === 0) {
    imgClass = 'eventImageSingle'
  } else if (portraitURLs.includes(imageURL)) {
    imgClass = 'eventImagePortrait'
    colClass = 'noTopMargin'
  } else {
    imgClass = 'eventImageLandscape'
  }

  return (
    <Col
      className={colClass}>
      <img
        src={imageURL}
        className={imgClass}
        alt={"Postcard from gallery event."}
      ></img>
    </Col>
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
