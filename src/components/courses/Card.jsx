import PropTypes from 'prop-types';
import { BsBook } from 'react-icons/bs';

export default function Card({ course }) {
    const { image_url, title, credit, description,  price} = course;
    console.log(course)
  return (
    <div className="card bg-base-100 shadow-xl">
        <figure className="px-4 pt-10">
            <img src={image_url} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body px-4 items-center text-center">
              <h2 className="card-title">{title }</h2>
              <p>{description}</p>
              <div className='flex gap-3'>
                  <div>
                      $ Price: { price }
                  </div>
                  <div className='flex justify-center items-center'>
                      <BsBook className='me-2'/> Credit: { credit }
                  </div>
              </div>
            <div className="card-actions">
                <button className="btn btn-primary capitalize btn-sm">Select</button>
            </div>
        </div>
    </div>
  )
}
Card.propTypes = {
    course: PropTypes.object.isRequired
}
