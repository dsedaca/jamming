import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import React from 'react';
import './App.css';


const App = () => {
  return (
    <>
      <h1>Jammming</h1>
      <div className='App'>
        <SearchBar />
        <SearchResults />
      </div>
      
    </>
  );
}

export default App;
