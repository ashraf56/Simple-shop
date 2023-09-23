"use client"

import { UserAuth } from '@/app/context/Authcontext';
import Link from 'next/link';
import ThemeButton from '../ThemeButton';
import { deleteCookie } from 'cookies-next';
const Navbar = () => {
  let { user,logout } = UserAuth();

const LogOut = async()=>{
  try {
    await logout()
    deleteCookie("LogInUser");

  } catch (error) {
    
  }
}

    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
     
            <li>
                <Link href={'/'}>Home</Link>
            </li>
            <li>
                <Link href={'/about'}>About</Link>
            </li>
            <li>
                <Link href={'/login'}>LogIN</Link>
            </li>
            <li>
                <Link href={'/homeblog'}>Blogs</Link>
            </li>
            <li>
                <Link href={'/dashboard'}>Dashboard</Link>
            </li>
            <li>
                <Link href={'/admins'}>admin</Link>
            </li>
         
            <li>
           {   user &&  <Link href={'/about'}>{user?.displayName}</Link>}
            </li>
            <li>
           {   user &&  <button onClick={LogOut}>Logout</button>}
            </li>
         
    
    </ul>
<ThemeButton></ThemeButton>
  </div>
</div>
        </div>
    );
};

export default Navbar;