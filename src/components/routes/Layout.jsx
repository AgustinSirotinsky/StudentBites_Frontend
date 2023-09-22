import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavBarTest from "../../assets/NavBarTest";

const Layout = () => {
    return (
    <React.Fragment>
        <NavBarTest></NavBarTest>
        <Outlet />
    </React.Fragment>)
}

export default Layout