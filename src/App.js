import React from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Profile from './components/Profile/Profile';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Products />
        <Profile />
      </div>
    );
  }
}

export default App;
