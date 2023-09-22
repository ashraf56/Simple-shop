import Image from 'next/image';
import React from 'react';

let getAdmins= async () =>{
    let apiURl=process.env.API_url
    try {
        let res= await fetch(`${apiURl}/api/user/admins`,{
            cache:"no-store"
        })
        if (!res.ok) {
            throw  new Error("admins data load failed ")
        }
        return res.json()
      } catch (error) {
      
        console.log(error);
      }
}
const AllADmins = async() => {
let admins= await  getAdmins()
    return (
        <div className='bg-base-300'>
            <h1 className='text-center text-3xl uppercase font-bold p-4'>All Admins  DATA</h1>
            <div className='grid grid-cols-4 mx-auto p-10 container items-center justify-center gap-3 '>
                {
                    admins.map( (a)  =>(
                        <div className="avatar justify-center " key={a?._id}>
  <div className="w-24 rounded-xl">
    <Image src={a?.photo}width={100} height={100}alt=''></Image>
    <p>{a?.name}</p>
  </div>
</div>

                    ))
                }
            </div>
        </div>
    );
};

export default AllADmins;