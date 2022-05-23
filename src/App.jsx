import React from 'react';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import { Layout, Space } from 'antd';
import './App.css';

//import Home from './components/Home.jsx'
import Home from './components/Home_test.jsx'
import Dashboard from './components/Dashboard.jsx'
import About from './components/About.jsx'
import DetailArticle from './components/Detailarticle.jsx'
import Registration from './components/Register.jsx'
import NotFound from './components/Notfound.jsx'
import BreedList from './components/Breedlist.jsx'
import DogList from './components/Doglist.jsx'


const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Header>
        <nav>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/register">Register</Link>
            <Link to="/breedslist">Breedslist</Link>
            <Link to="/dogslist">Dogslist</Link>
            <Link to="/about">About</Link>

          </Space>
        </nav>
      </Header>
      <Content>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/a/:aid" element={<DetailArticle />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/breedslist" element={<BreedList />} />
          <Route path="/dogslist" element={<DogList />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
      <Footer>
        <p>VT6003CEM Demo</p>
      </Footer>
    </Router>
  );
}

export default App;