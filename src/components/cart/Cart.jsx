import PropTypes from 'prop-types'

export default function Cart({ selected, totalRemaining, totalCredit, totalPrice }) {
  
  return (
    <section className="sm:w-1/2 mx-auto lg:w-1/4">
      <div className="rounded-lg bg-white p-5">
        <p className="text-sky-500 text-lg font-semibold">Credit Hour Remaining {totalRemaining} hr</p>
        <div className="divider"></div>
        <h2 className="text-xl font-bold text-[#1C1B1B] mb-3">Course Name</h2>
        <ol className="list-decimal ps-5 text-gray">
          {selected.map(item => <li key={item.id}>{ item.title }</li>)}
        </ol>
        <div className="divider"></div>
        <p>Total Credit Hour : { totalCredit }</p>
        <div className="divider"></div>
        <p>Total Price : {totalPrice} USD</p>
      </div>
    </section>
  )
}

Cart.propTypes = {
  selected: PropTypes.array.isRequired,
  totalRemaining: PropTypes.number.isRequired,
  totalCredit: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired
}
