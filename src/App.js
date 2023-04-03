import Navbar from "./Navbar";
import Home from './Home';
import Create from './Create'
import BlogDetail from "./BlogDetail";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
