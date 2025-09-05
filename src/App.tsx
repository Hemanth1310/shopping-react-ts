import Sidebar from './components/Sidebar'
import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MainContent from './components/MainContent'
import Product from './components/Product'
function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
    <div className='flex h-screen'>
      <Sidebar/>
      <div className='rounded w-full flex justify-between flex-wrap'>
        <Routes>
          <Route path='/' element={<MainContent/>}/>
          <Route path='/product/:id' element={<Product/>}/>
        </Routes>
      </div>
    </div>
 </BrowserRouter>
  )
}

export default App
