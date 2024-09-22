import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<h1>Projects</h1>} />
      <Route path="/contact" element={<h1>Contacts</h1>} />
      <Route path="/education" element={<h1>Education</h1>} />
      {/* You can add a NotFound route for better error handling */}
      <Route path="*" element={<h1>404 - Not Found</h1>} />
    </Routes>
  );
};

export default RouterComponent;
