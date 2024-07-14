import React from 'react'
import './Card.css'
import myimg from './images/161458133.jpg'
function Card() {
  return (
    <div className='card'>
        <div className='image'></div>
        <div className='catogry'>Learning</div>
        <div className='date'>published 14 jul 2020</div>
        <h3>HTML & Css Foundation</h3>
        <p>sign the Qr code to vist front end mentor and take your coding skills to the next livel</p>
        <div className='createBy'>
            <img src={myimg} alt='image'></img>
            <h4>alaaeddineGO</h4>
        </div>
    </div>
  )
}

export default Card