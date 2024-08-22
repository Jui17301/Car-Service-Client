import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/images/login/login.svg'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { AuthContext } from '../../providers/AuthProvider'
const Login = () => {

  const {signIn} = useContext(AuthContext);
  const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const email= form.email.value;
    const password = form.password.value;

    signIn(email,password)
    .then(result=>{
       const user = result.user;
       console.log(user);
    })
    .catch(error=>{
      console.log(error);
    })
    
  }


  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className="mr-12 w-1/2">
      <img src={img} alt="" />
    </div>
    <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 shadow-2xl">
      <>
      <h1 className="text-3xl text-center font-bold">Login</h1>
       <form  className="card-body" onSubmit={handleLogin}>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <input className="btn bg-[#FF3811] text-white font-bold"  type="submit" value="Login" />
        </div>
       </form>
       <p className='my-4 text-center'>New to Car Service <Link to='/signUp' className=' text-[#FF3811] font-bold '>Sign Up</Link> </p>
      </>
    </div>
  </div>
</div>
  )
}

export default Login
