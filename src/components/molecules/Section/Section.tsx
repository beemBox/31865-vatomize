import React from 'react'
import './Section.css'

const Section = ({msg}) => {

  return (
    <section className="section">
      <h2 className='section__heading'>{msg}</h2>
    </section>
  )
}

export default Section