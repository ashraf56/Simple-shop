'use client'
import React from 'react';
import { useRouter } from "next/navigation";

const Deletebut = ({id}) => {
    const router = useRouter();
    let handleDElete= async ()=>{
        try {
         const res= await fetch(`/api/products?id=${id}`,{
            method: "DELETE"
          })
if (res.ok) {
    router.refresh()
}

        } catch (error) {
          console.log(error);
        }
      }
    return (
        <button onClick={handleDElete}>
            DELETE
        </button>
    );
};

export default Deletebut;