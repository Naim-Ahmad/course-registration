import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Card from './Card'

export default function Courses({selectHandler}) {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch('courses.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])
  
  return (
    <section className='lg:w-3/4 mb-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-5'>
        {
          courses.map(course => {
            return <Card
              key={course.id}
              course={course}
              selectHandler={selectHandler}
            />
          })
        }
      </div>
    </section>
  )
}

Courses.propTypes = {
  selectHandler: PropTypes.func.isRequired
}
