/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { portraitURLs, EventObjs } from '../Constants'
import './Events.css'

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
      key={imageURL}
      className={colClass}
    >
      <img
        src={imageURL}
        className={imgClass}
        alt="Postcard from gallery event."
      />
    </Col>
  )
}

const EventSection = eventObj => {
  return (
    <div
      key={eventObj.title}
      className="eventContainer"
    >
      <Row className="imageRow">
        {
          eventObj.imageURLs.map(
            imageUrl => (EventImage(imageUrl, eventObj.imageURLs.length - 1)),
          )
        }
      </Row>
      <Row>
        <p className="imageCaption">
          {eventObj.title} | {eventObj.galleryName} | {eventObj.dateStr}
        </p>
      </Row>
    </div>
  )
}

class Events extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentEventYear: props.currentEventYear,
    }
    this.getEventsForYear = this.getEventsForYear.bind(this)
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      currentEventYear: nextProps.currentEventYear,
    }
  }

  getEventsForYear() {
    return EventObjs.filter(event => {
      const { currentEventYear } = this.state
      return event.year === currentEventYear
    })
  }

  render() {
    const events = this.getEventsForYear()

    return (
      <div className="eventsPageContainer">
        { events.map(event => EventSection(event)) }
      </div>
    )
  }
}

export const Event = (title, imageURLs, galleryName, dateStr, year) => {
  return {
    title,
    imageURLs,
    galleryName,
    dateStr,
    year,
  }
}

export default Events
