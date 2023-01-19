import React from "react";
import { Route, Routes } from "react-router-dom";

function index() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route />
        </Route>
      </Routes>
    </>
  );
}

export default index;
