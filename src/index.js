import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Counter from './Components/Counter';
import MoviePage from './Components/Movie/MoviePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <div className='container-fluid'>
      <Counter/>
      <MoviePage/>
    </div>
    <Footer/>
  </React.StrictMode>
);

