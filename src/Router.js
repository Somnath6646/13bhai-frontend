import React, { Component } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import App from "./App";
import { CoursePage } from "./components/CoursePage";
import { HackathonsPage } from "./components/HackathonsPage";
import { JobsPage } from "./components/JobsPage";
import { LandingPage } from "./components/LandingPage";
import CookieApp from "./CookieApp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="courses" element={<CoursePage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="hackathons" element={<HackathonsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
