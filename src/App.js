import React, {useState} from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';

function App() {

  // States for searching - if applicable
  const [search, setSearch] = useState('');
  const [searching, setSearching] = useState(false);

  // Function to control searching views
  const searchFor = (searchValue, searchState) => {
    setSearch(searchValue);
    setSearching(searchState);
  }


  return (
    <div className="container-fluid">
      <NavigationBar search={searchFor}/>
    </div>
  );
}

export default App;
