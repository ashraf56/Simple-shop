"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { UserAuth } from '../context/Authcontext';
import { useRouter } from 'next/navigation';
import { Toaster, toast } from 'react-hot-toast';
const Signupform = () => {
  const { register, handleSubmit } = useForm()
  let router = useRouter()
  const { createUser, profileUpdate } = UserAuth()
  const onSubmit = async (data) => {
    console.log(data)
    let { name, photo, email, password } = data;
    let role = "user"
    try {
      await createUser(email, password)
      await profileUpdate({
        displayName: name, photoURL: photo
      })
      const res = await fetch("/api/user",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ name, email, photo, role }),
        });
      if (res.ok) {
        toast.success('Successfully created!');
        router.push('/')
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      alert(error)
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" {...register("name")} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="photo" className="input input-bordered" {...register("photo")} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" {...register("email")} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" {...register("password")} />
          <label className="label">
            <Link href={'/login'} className="label-text-alt link link-hover">Already have acount? Login now</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
          <Toaster />
        </div></div>
    </form>
  );
};
export default Signupform;