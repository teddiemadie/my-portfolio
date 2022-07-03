import React from 'react'
import './Hobby.css'

function Hobby({img,title,desc}) {
  return (
    <div className='hobby'>
        <img alt='hobby' src={img} className='hobby-img'></img>
        <p className='hobby-title'>{title}</p>
        <p className='hobby-desc'>{desc}</p>
    </div>
  )
}

export default Hobby