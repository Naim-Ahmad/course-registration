import PropTypes from 'prop-types';
import { BsBook } from 'react-icons/bs';

export default function Card({ course, selectHandler }) {
    const { image_url, title, credit, description,  price} = course;
    
  return (
    <div className="card max-w-xs bg-base-100 shadow-xl">
        <figure className="px-4 pt-4">
            <img src={image_url} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body p-4">
              <h2 className="card-title py-2">{title }</h2>
              <p className='text-gray'>{description}</p>
              <div className='flex gap-3 py-2 text-gray'>
                  <div>
                      $ Price: { price }
                  </div>
                  <div className='flex justify-center items-center'>
                      <BsBook className='me-2'/> Credit: { credit }
                  </div>
              </div>
            <div className="card-actions">
                <button className="btn bg-sky-500 hover:bg-sky-600 text-white capitalize btn-sm flex-1" onClick={()=> selectHandler(course)}>Select</button>
            </div>
        </div>
    </div>
  )
}
Card.propTypes = {
    course: PropTypes.object.isRequired,
    selectHandler: PropTypes.func.isRequired
}
