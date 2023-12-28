import React from 'react';
import Sidebar from './Sidebar';
const DashBoardLayout = ({ children }) => {
  return (
    <div className=''>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  w-full">
          {children}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
};
export default DashBoardLayout;