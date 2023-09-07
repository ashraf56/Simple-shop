import React from 'react';

const getUserbyiD = async(id) => {
  
   
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

export default getUserbyiD;