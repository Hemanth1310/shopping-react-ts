import Sidebar from './components/Sidebar'
import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MainContent from './components/MainContent'
import Product from './components/Product'
import TopSeller from './components/TopSeller'
import PopularBlog from './components/PopularBlog'
function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
    <div className='flex h-screen'>
      <Sidebar/>
      <div className='rounded w-full flex justify-center flex-wrap'>
        <Routes>
          <Route path='/' element={<MainContent/>}/>
          <Route path='/product/:id' element={<Product/>}/>
        </Routes>
      </div>
      <div>
        <TopSeller/>
        <PopularBlog/>
      </div>
    </div>
 </BrowserRouter>
  )
}

export default App
