import React from 'react';
import './App.css';
import Header from '../../layout/Header/Header';
import routes from '../../config/routes';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header setUser={this.setUser}/>
        {routes}
      </div>
    );
  }
  
}

export default App;