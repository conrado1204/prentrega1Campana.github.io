import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <div style={comingSoonStyle}>
        Próximamente
      </div>
    </div>
  );
}

const comingSoonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  fontSize: '3em',
  color: 'white',
  background: 'linear-gradient(to right, #ff9966, #ff5e62)'
};

export default App;
