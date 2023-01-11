import React from 'react';
import NavBar from './navBar';
import Header from './header';
import { Outlet } from 'react-router-dom';
import PlayingBar from './playingBar';
const DashboardLayout = () => {
    return (
        <>
            <NavBar/>
            <Header/>
            <Outlet/>
            <PlayingBar/>
        </>
    );
};

export default DashboardLayout;