import axios from 'axios'
import  { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



type Product = {
    id:string,
    title:string,
    description:string,
    price:number,
    rating:number,
    images:string[]

}

const Product = () => {
    const {id} = useParams<{id:string}>();

    const navigate=useNavigate()
    const [product,setProduct] = useState<Product|null>(null)

    useEffect(()=>{
        if(id){
            axios.get<Product>(`https://dummyjson.com/products/${id}`)
                .then((response)=>{
                    setProduct(response.data)
                })
                .catch((err)=>console.error("Error at Fetching"+err))
        }
    },[id])

    if(!product){
        return <h1>Loading...</h1>
    }

  return (
    <div className='p-5 w-[60%]'>
        
        <img src={product.images[0]} alt={product.title} className='w-[50%] h-auto mb-5'></img>
        <h1 className='text-2xl mb-4 font-bold'>{product.title}</h1>
        <p className='mb-4 text-gray-700 w-[70%]'>{product.description}</p>
        <div className='flex'>
            <p>Price: ${product.price}</p>
            <p className='ml-10'>Rating: {product.rating}</p>
        </div>
        <button onClick={()=>navigate(-1)} className='mt-5 mb-5 px-4 py-2 bg-black text-white rounded' >Back</button>
    </div>
  )
}

export default Product