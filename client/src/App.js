import React, { useState } from "react"
import { Routes, Route } from "react-router-dom";
import './App.css';

import TaskListPage from "./components/TaskListPage";
import CalendarComponent from "./components/CalendarComponent"
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tasklist" element={<TaskListPage />} />
      <Route path="/calendar" element={<CalendarComponent />} />
    </Routes>
    </>
  );
}

export default App;
