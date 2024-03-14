import React from 'react'
import './css/Home.css'

function Home(props) {
  return (
    <>
      <h1 className='homte-title'>{props.data[0].title}</h1>
      <p className='p1-title'>{props.data[0].p1}</p>
      <p className='p2-title'>{props.data[0].p2}</p>
    </>
    
  )
}

export default Home