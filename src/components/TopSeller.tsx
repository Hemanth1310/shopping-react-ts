import React, { useEffect ,useState} from 'react'

type Props = {}

type Author={
    name:string,
    isFollowing:boolean,
    image:string,  


}

const TopSeller = (props: Props) => {
    const [authors,setAuthors] = useState<Author[]>([])
    

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await fetch('https://randomuser.me/api/?results=5')
                const data = await response.json()
                console.log(data)
                const authorsData :Author[] = data.results.map((user:any)=>({
                    name:`${user.name.first} ${user.name.last} `,
                    isFollowing:false,
                    image:user.picture.medium,

                }))
                setAuthors(authorsData)
            }catch(error){
                console.error(`Error fetching authors:${error}`)
            }
        }
        fetchData();
    },[])


    const handleFollow=(name:string)=>{
        setAuthors(authors.map((author)=>(author.name===name?{...author,isFollowing:!author.isFollowing}:author)))
    }
  return (
    <div className='bg-white p-5 mx-5 mt-[5rem] border w-[23rem] rounded'>
        <h2 className="text-xl font-bold mb-5">Top Sellers</h2>
        <ul>
            {authors.map((author,index)=>(
                <li key={index}className='flex justify-between items-center mb-4'>
                    <section className='flex justify-center items-center'>
                        <img src={author.image} alt={author.name} className='w-[25%] h-[25%] justify-center rounded-full'></img>
                        <span className='ml-4'>{author.name}</span>
                    </section>
                    <button onClick={()=>handleFollow(author.name)} className={`py-1 px-3 rounded ${author.isFollowing?'bg-red-500 text-white':'bg-black text-white'}`}>{author.isFollowing?"Unfollow":"Follow"}</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TopSeller