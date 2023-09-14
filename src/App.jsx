import './App.css'
import Cart from './components/cart/Cart'
import Courses from './components/courses/Courses'

function App() {
  return (
    <>
      <header>
        <h1>Course Registration</h1>
      </header>
      <main>
        <Courses/>
        <Cart />
      </main>
    </>
  )
}

export default App
