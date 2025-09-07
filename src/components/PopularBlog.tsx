import { MessageCircle, ThumbsUp } from 'lucide-react'


const blogs =[
    {
        title:"My amazing Blog Title 1",
        author:"Jordan",
        likes:142,
        comments:43
    },
    {
        title:"My amazing Blog Title 2",
        author:"Joe",
        likes:453,
        comments:90
    },
    {
        title:"My amazing Blog Title 3",
        author:"Criss",
        likes:111,
        comments:12
    },
    {
        title:"My amazing Blog Title 4",
        author:"Mike",
        likes:656,
        comments:343
    }
]




const PopularBlog = () => {
  return (
    <div className="bg-white p-5 w-[23rem] mb-5 mt-4 border ml-5  rounded">
        <h2 className='text-xl font-bold mb-5'>Popular Blogs</h2>
        <ul>
            {blogs.map((blog,index)=>(
                <li key={index} className='mb-4'>
                    <div className='flex justify-between items-center'>
                        <span className='font-bold mb-2'>{blog.title}</span>
                    </div>
                    <span className='text-gray-600'>Publish by {blog.author}</span>
                    <div className='flex items-center mt-2'>
                        <MessageCircle size={16}/>
                        <span className="text-gray-500 mr-5 ml-1">{blog.likes}</span>
                        <ThumbsUp size={16}/>
                        <span className="text-gray-500 mr-5 ml-1">{blog.comments}</span>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PopularBlog