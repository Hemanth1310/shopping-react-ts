import { useEffect, useState } from 'react'
import { useFilter } from './FilterContext'



interface Product {
    category:string
}

interface FetchResponse {
    products:Product[]
}


const Sidebar = () => {
    const {searchQuery,setSearchQuery,selectedCategory,setSelectedCategory,minPrice,setMinPrice,maxPrice,setMaxPrice,setKeyword} =useFilter()
    const [categories,setCategories] = useState<string[]>([])
    const [keywords] =useState<string[]>([
        'apple',
        'watch',
        'Fashion',
        'trend',
        'shoes',
        'shirt'
    ])

    useEffect(()=>{
        const fetchCategories = async ()=>{
            try{
                const response = await fetch("https://dummyjson.com/products")
                const data:FetchResponse = await response.json()
                // console.log(data)

                const uniqueCategories = Array.from(
                    new Set(data.products.map(product=>product.category))
                )
                 setCategories(uniqueCategories)
            }catch(error){
                console.log('Error fetching response',error)
            }
           
        }
        fetchCategories();
       
    },[])

    const handleCategories = (category:string)=>{
        setSelectedCategory(category)
    }

    const handleKeyword = (keyword:string)=>{
        setKeyword(keyword)
    }

    const handleResetFilters=()=>{
       setSearchQuery('')
       setSelectedCategory('')
       setMinPrice(undefined)
       setMaxPrice(undefined)
       setKeyword('')
    }

    // useEffect(()=>{
    //  console.log(categories)
    // },[categories])
  return (
    <div className='w-84 h-screen p-5'>
        <h1 className='text-2xl font-bold mb-10 mt-4'>React-TypeScript Store</h1>
        <section>
            <input type="text" className='border-2 h-[50px] w-full rounded px-2 mb-3 sm:mb-0 ' placeholder='Search prodect' value={searchQuery} onChange={e=>setSearchQuery(e.target.value)}></input>
            <div className="flex justify-center mt-3 items-center ">
                <input type='text' className='border-2 mr-2 px-5 py-3 mb-3 w-full' placeholder='Min' value={minPrice ?? ''} onChange={e=>setMinPrice(e.target.value ? parseFloat(e.target.value):undefined)}/>
                <input type='text' className='border-2 mr-2 px-5 py-3 mb-3 w-full' placeholder='Max' value={maxPrice ?? ''} onChange={e=>setMaxPrice(e.target.value ? parseFloat(e.target.value):undefined)}/>
            </div>

        {/* Category Section */}
            <section>
            <div className='mb-5'>
                <h2 className='text-xl font-semibold mb-3'>Categories</h2>
            </div>
            {categories.map((category,index)=>(
                <label key={index} className='block mb-2'>
                    <input type='radio' name='category' value={category} className='mr-2 w-[16px] h-[16px]' onChange={()=>handleCategories(category)} checked={selectedCategory==category}/>
                    {category.toUpperCase()}
                </label>
            ))}
            </section>
            {/* Keywords Section */}
            <div className="mb-5">
                <h2 className="text-xl font-semibold mb-3"></h2>
                <div>
                    {keywords.map((keyword,index)=>(
                        <button key={index} className='block mb-2 px-4 py-2 w-full text-left border rounded hover:bg-gray-200' onClick={()=>handleKeyword(keyword)}>
                            {keyword.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            <button className='w-full mb-[4rem] py-2 bg-black text-white rounded mt-5' onClick={handleResetFilters}>Reset Filter</button>
        </section>
    </div>
  )
}

export default Sidebar