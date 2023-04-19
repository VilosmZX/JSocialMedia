import { useState } from 'react'
import './App.css';
import { useTheme } from './context/ThemeContext';
import { useUser } from './context/UserContext';
import {
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  const { theme, setTheme } = useTheme();
  const { user, loading } = useUser();

  return (
    <main className={theme == 'light' ? 'light' : 'dark'}>
      <Navbar />
      <Routes>
        <Route index path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
