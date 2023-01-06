import React from 'react';
import './App.css';
import Header from './components/header';
import Main from './containers/Main';
import Footer from './components/footer';

function App() {
  return(
  <>
       <div className="main-container">
      <Header/>
      <Main />
      <Footer />
    </div>
    </>
  );
}

export default App;
