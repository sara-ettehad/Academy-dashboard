import Home from './pages/Home';

import { 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import "../src/styles/body.css"

function App() {
  return (
    <div className='container'>
      <Router>
      <Routes>
        <Route path="/Academy-dashboard" element={<Home />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;