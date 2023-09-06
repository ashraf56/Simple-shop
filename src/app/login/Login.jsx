"use client";
import React from 'react';
import { UserAuth } from '../context/Authcontext';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';
import { Toaster, toast } from 'react-hot-toast';

const Login = () => {
    let { signIn ,googleLogin} = UserAuth()

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {console.log(data)
        let {email,password}=data;
    try {
        await signIn(email,password);
       
router.push('/')
reset()
    } catch (error) {
        
    }
    
    }

    let handleGoogle= async ()=>{

      try {
        await googleLogin();
    
        router.push('/')
        toast.success("log in success")
      } catch (error) {
        console.log(error);
      }
    }

    return (
      <div className="card-body">

     
        <form  onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" {...register("email")}/>
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" {...register("password")} />

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <label className="label">
            <Link href={'/signup'} className="label-text-alt link link-hover">Create new account</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#f0a6ca]">Login</button>
        </div>
      </form>
<div className='text-center'>
  <button className='btn btn-circle' onClick={handleGoogle}>
    g
  </button>
</div>
<Link href={'/'}>HOme</Link>
<Toaster/>
 </div>

    );
};

export default Login;