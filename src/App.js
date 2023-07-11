import './App.css';
import Header from './Header';
import Footer from './Footer';
import BodyComponent from './BodyComponent';
import Products from './Products';
import React, { useState } from 'react';

export const UserContext = React.createContext(null);

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header></Header>
        <BodyComponent></BodyComponent>
        <div id="products-component">
          <Products></Products>
        </div>
        <Footer></Footer>
      </div>
    </UserContext.Provider>
  );
}

export default App;
