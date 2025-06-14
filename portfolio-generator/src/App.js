import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResumeBuilder from './pages/ResumeBuilder';
import ProjectsPage from './pages/ProjectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Projects" element={<HomePage />} />
        <Route path="/Projects/about" element={<HomePage />} />
        <Route path="/Projects/resume" element={<ResumeBuilder />} />
        <Route path="/Projects/project" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}
export default App;