import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';
import React from 'react';
import './App.css';


const App = () => {
  return (
    <>
      <h1>Jammming</h1>
      <div className='App'>
        <SearchBar />
        <SearchResults />
        <PlayList />
      </div>
      
    </>
  );
}

export default App;
