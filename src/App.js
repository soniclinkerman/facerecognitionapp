import React from 'react';
import './App-styles.scss';
import Navigation from './components/Navigation/Navigation-component';
import Logo from './components/Logo/Logo-component';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank-component';

function App() {
  return (
    <div className="App">

      <div className="nav">
        <Logo logo={"/assets/png/logo.png"}/>
        <Navigation/>
      </div>

      <Rank rank={8}/>

      <ImageLinkForm/>

     
    </div>
  );
}

export default App;
