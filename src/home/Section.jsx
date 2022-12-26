import React from 'react'
import Article from './components/Article'
import Grid from './components/Grid'
import '../../src/home/Section.css'

const Section = () => {
  return (
    <section className='section'>
      <Article/>
      <Grid/>
    </section>
  )
}

export default Section