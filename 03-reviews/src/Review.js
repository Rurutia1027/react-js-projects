import React, { useState } from 'react'
import people from './data'
import {
  FaChevronLeft,
  FaChevronCircleRight,
  FaQuoteRight,
  FaQuoteLeft,
  FaChevronRight,
} from 'react-icons/fa'

const Review = () => {
  const [length, setLength] = useState(people.length)
  const [index, setIndex] = useState(3)
  const { name, job, image, text } = people[index]

  const prePerson = () => {
    const newIndex = index - 1 < 0 ? length - 1 : index - 1
    setIndex(newIndex)
  }
  const nextPerson = () => {
    const newIndex = index + 1 >= length ? (index + 1) % length : index + 1
    setIndex(newIndex)
  }

  const randomPerson = () => {
    const newIndex = Math.floor(Math.random() * length)
    console.log(newIndex)
    setIndex(newIndex)
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prePerson}>
          <FaChevronLeft />
        </button>
        <button className='prev-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        suprise me
      </button>
    </article>
  )
}

export default Review
