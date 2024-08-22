import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ServiceCard = ({service}) => {

  const {_id,title,img,price} = service

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={img}
      alt="service"
      className="rounded-xl" />
  </figure>
  <div className="card-body flex flex-row justify-between items-center">
    <div>
    <h2 className="card-title">{title}</h2>
    <p className='text-xl text-[#FF3811]'>Price:{price}</p>
    </div>
    <div className="card-actions">
       <Link to={`/checkout/${_id}`}>
        <FaArrowRight className='text-[#FF3811]' />
        </Link>
    </div>
  </div>
</div>
  )
}

export default ServiceCard
