import { useEffect, useState } from 'react'
import Card from './Card'

export default function Courses() {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch('courses.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])
  
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-center gap-5 lg:w-3/4'>
        {
          courses.map(course => {
            return <Card
              key={course.id}
              course={course}
            />
          })
        }
      </div>
    </section>
  )
}
