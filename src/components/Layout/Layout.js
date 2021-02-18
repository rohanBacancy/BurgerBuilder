import React from 'react';
import './Layout.css';

const Layout = ( { children } ) => {
    return (
        <>
            {/* <div> TooldBar , Sidebad , BackDrop </div> */}
            <main className="content">{ children }</main>
        </>
    )
}

export default Layout
