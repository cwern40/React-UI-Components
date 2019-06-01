import React from 'react';
import './App.css';
import Headercontainer from './components/HeaderComponents/HeaderContainer';
import Cardcontainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div>
      <Headercontainer />
      <Cardcontainer />
    </div>
  );
};

export default App;
