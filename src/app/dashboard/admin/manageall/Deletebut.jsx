'use client'
import React from 'react';
import { useRouter } from "next/navigation";
import { Toaster, toast } from 'react-hot-toast';

const Deletebut = ({id}) => {
    const router = useRouter();
    let handleDElete= async ()=>{
        try {
         const res= await fetch(`/api/products?id=${id}`,{
            method: "DELETE"
          })
if (res.ok) {
  toast.success('item successfully deleted',{
    duration:4000,
    position:"top-center"
  })
    router.refresh()
}

        } catch (error) {
          console.log(error);
        }
      }
    return (
        <button onClick={handleDElete}>
            DELETE
            <Toaster></Toaster>
        </button>
    );
};

export default Deletebut;