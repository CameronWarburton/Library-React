import Footer from './components/Footer';
import Nav from './components/Nav';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Books from './pages/Books';
import { books } from "./data";
import BookInfo from './pages/BookInfo';


function App() {
  return (
    <Router>
      <Routes>
    <div className='App'>
      <Nav />
      <Route path="/" element={Home}/>
      <Route path="/books" element={() => <Books books={books} />} />
      <Route path="/books/1" element={() => <BookInfo books={books} />} />
      <Footer />
    </div>
      </Routes>
    </Router>
  );
}

export default App;