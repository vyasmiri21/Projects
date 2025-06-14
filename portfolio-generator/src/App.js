import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResumeBuilder from './pages/ResumeBuilder';
import ProjectsPage from './pages/ProjectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Projects" element={<HomePage />} />
        <Route path="/Projects/about" element={<HomePage />} />
        <Route path="/Projects/project" element={<ProjectsPage />} />
        <Route path="/Projects/project/resume" element={<ResumeBuilder />} />
      </Routes>
    </Router>
  );
}
export default App;