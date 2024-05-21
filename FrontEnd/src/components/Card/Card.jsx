import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
const Card = ({item}) => {

  return (
    <div className='ycard'>
        <img src={item.image} alt="" />
        <Link to={`/detail/${item._id}`}>{item.title}</Link>
        <p>{item.description}</p>
        <div className='cardDown'>
            <img src="https://preview.colorlib.com/theme/course/images/author.jpg" alt="" />
            <span>Michael Smith, Author</span>
            <p>{item.price}$</p>
        </div> 
    </div>
  )
}

export default Card
