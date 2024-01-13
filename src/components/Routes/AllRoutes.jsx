import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../../App";
import Navbar from "../Navbar";
import { Home } from "../Home";
import { Features } from "../Features";
import { About } from "../About";
import { Pricing } from "../Pricing";
import { Newsletter } from "../Newsletter";
import { Footer } from "../../shared/Footer";
import { SignUp } from "../SignUp";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/signup"
        element={
          <>
            <Navbar />
            <Home />
            <Features />
            <About />
            <Pricing />
            <Newsletter />
            <Footer />
          </>
        }
      />
      <Route path="/" element={<SignUp />} />
    </Routes>
  );
};
