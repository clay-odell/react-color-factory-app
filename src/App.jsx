import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ColorsList from './ColorsList';
import Color from './Color';
import NewColorForm from './NewColorForm';
import NotFound from './NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/colors" element={<ColorsList />} />
        <Route path="/color/:colorName" element={<Color />} />
        <Route path="/colors/new" element={<NewColorForm />} />
        <Route path="/colors/nope" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/colors/" />} />
      </Routes>
    </Router>
  );
}

export default App;
