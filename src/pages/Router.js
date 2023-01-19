import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Frontend from "../pages/Frontend";
import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";

function Router() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Frontend />} />
            <Route path="/auth/*" element={<Auth />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
