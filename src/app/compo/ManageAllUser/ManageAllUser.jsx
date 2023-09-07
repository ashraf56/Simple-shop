import getAllUser from '@/util/getAllUser';
import Image from 'next/image';
import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';


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
              <div className="flex items-center ">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                  <Image src={u.photo} width={50} height={50} alt='user img' ></Image>
                  </div>
                </div>
                
              </div>
            </td>
            <td>
             {u.name}
             
            </td>
            <td>{u.email}</td>
            <th>
              <button className="btn btn-ghost btn-xs">{u.role}</button>
            </th>
          
            <th>
          
         <button>
          <Link href={`/dashboard/admin/roleupdate/${u._id}`}>
          <FaEdit/>
          </Link>
         </button>
      
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