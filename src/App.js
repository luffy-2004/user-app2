import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUsers from './components/AddUsers';
import SearchUsers from './components/SearchUsers';
import ViewUsers from './components/ViewUsers';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddUsers />} />
          <Route path='/search' element={<SearchUsers />} />
          <Route path='/view' element={<ViewUsers />} />
          <Route path='/navbar' element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
