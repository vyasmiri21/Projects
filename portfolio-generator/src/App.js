import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResumeBuilder from './pages/ResumeBuilder';
import ProjectsPage from './pages/ProjectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<HomePage />} />
        <Route path="/resume" element={<ResumeBuilder />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}
export default App;