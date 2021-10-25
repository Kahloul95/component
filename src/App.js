import React from 'react';
import './App.css';
import FullName from './component/Profil/FullName';
import ProfilePhoto from './component/Profil/ProfilePhoto';
import Adresse from './component/Profil/Adresse';


function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Adresse />
    </div>
  );
}

export default App;
