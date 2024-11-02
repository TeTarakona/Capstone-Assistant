import React, { useState } from "react"
import { Routes, Route } from "react-router-dom";
import './App.css';

import TaskListPage from "./components/TaskListPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/tasklist" element={<TaskListPage />} />
    </Routes>
    </>
  );
}

export default App;
