import getUserbyiD from '@/util/getUserbyiD';
import React from 'react';

const getOneUserbyiD = async(id) => {
  
   
    let apiURl=process.env.API_url
  
    try {
      let res= await fetch(`${apiURl}/api/user/${id}`,{
          cache:"no-cache"
      })
      if (!res.ok) {
          throw  new Error("data load failed")
      }
      return res.json()
    } catch (error) {
    
      console.log(error);
    }

};

const page = async ({params}) => {
let {id}=params
let {user} = await getOneUserbyiD(id)
    return (
        <div>
            {
                user.name
            }
        </div>
    );
};

export default page;