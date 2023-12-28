"use client"
import Link from 'next/link';
import React from 'react';
import { FaBeer, FaDonate, FaHandHoldingHeart, FaHome, FaProcedures, FaSignOutAlt, FaUser, FaUserEdit } from 'react-icons/fa'
const Sidebar = () => {
  return (
    <aside className=' h-full bg-gradient-to-b from-[#e8bdf9] to-[#d8ded6] dark:text-black ' >
      <h1 className='font-extrabold p-10 text-center text-2xl uppercase'>Dahsboard</h1>
      <div className=''>
        <ul className="menu md:menu-vertical lg:min-w-max   rounded-box ">
          <li>
            <Link href={'/dashboard'}> <FaHome /> home</Link>
          </li>
          <li>
            <Link href={'/dashboard/donor'}><FaHandHoldingHeart /> Donor</Link>
          </li>
          <li>
            <Link href={'/dashboard/admin/event'}><FaUserEdit /> Event</Link>
          </li>
          <li>
            <Link href={'/dashboard/admin/manageall'}> <FaProcedures />Manage Product</Link>
          </li>
          <li>
            <Link href={'/dashboard/commonuser'}> <FaUser />User</Link>
          </li>
          <li>
            <Link href={'/dashboard/admin/additem'}> <FaUser />Add Product</Link>
          </li>
          <li>
            <Link href={'/dashboard/admin/usermanage'}> <FaUser />All user</Link>
          </li>
          <li>
            <Link href={'/'}> <FaUser />Go to home</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
{/* <div className='h-6/6 '>
    <ul className="menu p-4 w-80 h-5/6 text-base-content uppercase dark:text-black ">
      <li>
        <Link href={'/dashboard'}> <FaHome/> home</Link>
      </li>
      <li>
        <Link href={'/dashboard/donor'}><FaHandHoldingHeart/> Donor</Link>
      </li>
      <li>
        <Link href={'/dashboard/admin/event'}><FaUserEdit/> Event</Link>
      </li>
      <li>
        <Link href={'/dashboard/admin/manageall'}> <FaUser/>Manage User</Link>
      </li>
    </ul>
    <div className="divider">OR</div>
  <ul className='menu p-4 w-80 h-1/6 text-base-content uppercase dark:text-black '>
      <li>
        <Link href={'/'}><FaSignOutAlt/> go to home</Link>
      </li>
</ul>
    </div> */}