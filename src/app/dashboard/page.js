"use client"
import React from 'react';
import { UserAuth } from '../context/Authcontext';
import Image from 'next/image';
const page = () => {
  let { user } = UserAuth();
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content ">
          <div>    <h1 className='text-2xl font-bold uppercase py-5'>{
            user?.displayName
          }</h1>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;