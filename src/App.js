import './App.css';
import { Multiply } from './quizzes/Multiply';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header'
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="multiply" element={<Multiply />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
