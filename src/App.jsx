import './App.css'
import Cart from './components/cart/Cart'
import Courses from './components/courses/Courses'

function App() {
  return (
    <>
      <header className='max-w-[1200px] mx-auto px-8'>
        <h1 className='text-3xl font-bold text-center py-8'>Course Registration</h1>
      </header>
      <main className='max-w-[1350px] mx-auto px-8 lg:flex gap-8'>
        <Courses/>
        <Cart />
      </main>
    </>
  )
}

export default App
