import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";

function DefaultLayout({ isLoggedIn, setIsLoggedIn }) {
    return (
        <div className="text-white bg-black min-h-full pb-16">
            <Banner />
            <NavigationBar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default DefaultLayout;
