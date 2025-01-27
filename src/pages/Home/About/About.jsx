import React from 'react'
import parts from '../../../assets/images/about_us/parts.jpg';
import person from '../../../assets/images/about_us/person.jpg';

const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative'>
    <img
      src={person}
      className="w-3/4 rounded-lg shadow-2xl" />
      <img
      src={parts}
      className="absolute right-5 top-1/2 border-white border-8 w-1/2 rounded-lg shadow-2xl" />
    </div>
    <div className='lg:w-1/2 space-y-5 p-4'>
      <h2 className="text-5xl font-bold text-[#FF3811]">About Us</h2>
      <h1 className='text-5xl font-bold'>We are qualified & of experience in this field</h1>
      <p className="py-6">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      <br />
      the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      </p>
      <button className="btn border-none btn-primary text-white bg-[#FF3811]">Get More Info</button>
    </div>
  </div>
</div>
  )
}

export default About
