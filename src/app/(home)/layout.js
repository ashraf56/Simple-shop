import React from 'react';
import Navbar from '../compo/Navbar/Navbar';
const HomeLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};
export default HomeLayout;