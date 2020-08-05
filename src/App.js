import React from 'react';
import './App-styles.scss';
import Navigation from './components/Navigation/Navigation-component';
import Logo from './components/Logo/Logo-component';

function App() {
  return (
    <div className="App">

      <div className="nav">
        <Logo logo={"/assets/png/logo.png"}/>
        <Navigation/>
      </div>

     
    </div>
  );
}

export default App;
