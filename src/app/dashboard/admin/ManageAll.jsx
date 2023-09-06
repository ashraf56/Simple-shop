
import { getProduct } from '@/util/getProduct';
import React from 'react';
import Deletebut from './manageall/Deletebut';
import Link from 'next/link';

const ManageAll = async() => {
  let {allproduct}= await getProduct()

 
    return (
        <div className='items-center my-10'>
            <div className="overflow-x-auto">
  <table className="table">
   
    <thead>
      <tr>
        
        <th>Name</th>
        <th>stock quantity</th>
        <th>Price</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
    
   {
    allproduct.map(i =>(
      <tr key={i._id}>
    
      <td>{i.product_name}</td>
      <td>{i.stock_quantity}</td>
      <td>{i.price}</td>
      <td>
<Deletebut id={i._id}></Deletebut>

      </td>
      <td>
<button>
  <Link href={`/dashboard/admin/updateitem/${i._id}`}> update</Link>
</button>

      </td>
    </tr>
    ))
   }
  
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageAll;