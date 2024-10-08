import React from "react";
import Navbar from "./pages/Navbar";
import { Outlet } from "react-router-dom";
import NavbarStyle from "./pages/Navbar";

const App = () => {
  return (
    <div>
      <header>
        <NavbarStyle />
        <h1>The Mane Hair Salon </h1>
        {/* <nav>
          <a href="/">Home</a> | <a href="/staff">Staff</a> | <a href="/services">Services</a> | <a href="/booking">Booking</a> | <a href="/admin">Admin</a> 
        </nav> */}
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App