import React from 'react';
import './App.css';
import Little from './littlelemon.png'

function App() {
  return (
    <>
    <header>
      <img src={Little}/>
    </header>
    <nav>
      <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="order online.html">Order Online</a></li>
        <li><a href="login.html">Login</a></li>
      </ul>
    </nav>
    <main>
      <h1>Little Lemon</h1>
      <article>
        <h3>Chicago</h3>
        <p>we are family owned</p>
        <p>Mediterranean restaurant</p>
        <p>focused on traditional</p>
        <p>recepies served with a modern</p>
        <p>twist</p>
      </article>
    </main>
    <footer>
      <p>Copyright Little Lemon</p>
    </footer>
    <div className="App">
    
    </div>
    </>
  );
}

export default App;
