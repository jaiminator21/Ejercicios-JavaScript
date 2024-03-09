import React from 'react'

function Portrait(props) {
  return (
    <div className='imagen'>
      <img src={props.img}/>
    </div>
  )
}

export default Portrait