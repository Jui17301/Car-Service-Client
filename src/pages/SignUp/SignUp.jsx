
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../providers/AuthProvider'


const SignUp = () => {


  const {createUser} = useContext(AuthContext)

  const handleSignUp = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email= form.email.value;
    const password = form.password.value;


    createUser(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user);
    })
    .catch(error=>console.log(error))
    
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className="mr-12 w-1/2">
      <img src={img} alt="" />
    </div>
    <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 shadow-2xl">
      
      <h1 className="text-3xl text-center font-bold">Sign Up</h1>
       <form className="card-body" onSubmit={handleSignUp}>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <input className="btn bg-[#FF3811] text-white font-bold"  type="submit" value="Sign Up" />
        </div>
       </form>
       <p className='my-4 text-center'>Already Have an Account?<Link to='/login' className=' text-[#FF3811] font-bold '>Login</Link> </p>
      
    </div>
  </div>
</div>
  )
}

export default SignUp
