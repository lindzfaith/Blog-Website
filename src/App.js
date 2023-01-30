import React from 'react';
import './App.css';
import {HeroBanner} from './components'

function isHome() {
  if (window.location.pathname === '/') {
    return <HeroBanner/>
  }
}

function App() {
  return (
    <div>
      {isHome()};
    </div>
  );
}

export default App;
