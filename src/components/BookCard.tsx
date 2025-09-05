import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    id:string,
    title:string,
    image:string,
    price:number

}

const BookCard = ({id,title,image,price}: Props) => {
  return (
    <div className='border p-4 rounded'>
        <Link to={`/product/${id}`}>
            <img src={image} alt={title} className='w-full h-32 object-cover mb-2'></img>
            <h2 className='font-bold'>{title}</h2>
            <p className='font-light'>{price}</p>
        </Link>
    </div>
  )
}

export default BookCard