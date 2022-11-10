import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import AddBlog from './pages/AddBlog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/add' element={<AddBlog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog/:id' element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
