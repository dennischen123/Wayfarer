import React from 'react';
import './App.css';
import Header from '../../layout/Header/Header';
import routes from '../../config/routes';

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;