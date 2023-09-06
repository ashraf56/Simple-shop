import getAllUser from '@/util/getAllUser';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaEdit } from 'react-icons/fa';
import EditUserbutton from './EditUserbutton';

const ManageAllUser =async () => {


    let {user}= await getAllUser()
    return (
        <div className='p-5'>
          <div className="overflow-x-auto">
  <table className="table">
   
    <thead>
      <tr>
      
        <th>Photo</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
    
     
    {
        user.map(u => (
            <tr key={u._id}>
          
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                  <Image src={u.photo} width={50} height={50} alt='user img' ></Image>
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
             {u.name}
              <br/>
              <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>{u.email}</td>
            <th>
              <button className="btn btn-ghost btn-xs">{u.role}</button>
            </th>
            <th>
              <EditUserbutton u={u}></EditUserbutton>
            </th>
          </tr>
       
        ))
    }
      
    
   
    </tbody>
  
  
    
  </table>
</div>


        </div>
    );
};

export default ManageAllUser;