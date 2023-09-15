import { useState } from 'react'
import Swal from 'sweetalert2'
import './App.css'
import Cart from './components/cart/Cart'
import Courses from './components/courses/Courses'

function App() {
  const [selected, setSelected] = useState([])

  const selectHandler = (course) => {
    const isExist = selected.find(item => item.id === course.id)
    if (!isExist) {
      setSelected([...selected, course])
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'This course has already been added to your cart!'
      })
    }
  }
  return (
    <>
      <header className='max-w-[1200px] mx-auto px-8'>
        <h1 className='text-3xl font-bold text-center py-8'>Course Registration</h1>
      </header>
      <main className='max-w-[1350px] mx-auto px-8 lg:flex gap-8'>
        <Courses selectHandler={ selectHandler} />
        <Cart selected={ selected } />
      </main>
    </>
  )
}

export default App
