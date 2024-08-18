
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'


function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Simple Counter Application</h1>
      <Counter />
    </div>
  );
}

export default App
