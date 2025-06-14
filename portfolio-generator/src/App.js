import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResumeBuilder from './pages/ResumeBuilder';
import ProjectsPage from './pages/ProjectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/project" element={<ProjectsPage />} />
        <Route path="/project/resume" element={<ResumeBuilder />} />
      </Routes>
    </Router>
  );
}
export default App;