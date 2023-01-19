import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../components/Frontend/Footer";
import Header from "../../components/Frontend/Header";

function index() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/">
            <Route />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default index;
