import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Project from '../pages/Project';
import Experience from '../pages/Experience';
import Education from '../pages/Education';

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="*" element={<h1>404 - Not Found</h1>} />
    </Routes>
  );
};

export default RouterComponent;