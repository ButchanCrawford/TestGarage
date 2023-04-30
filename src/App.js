import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Find from "./components/find/Find";
import Driver from "./components/driver/Driver";
import Luxury from "./components/Luxury/Luxury";
import Footer from "./components/footer/Footer";
import Faq from "./components/faq/Faq";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Find />
              <Driver />
              <Luxury />
            </>
          }
        />
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
