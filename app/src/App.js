import React from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './List';
import Comics from './Comics';


function App() {



  	return (
        // {/* <List result = {comic_info.data.results}/> */}
        <List result = {Comics().data.results} />
  );
}

export default App;
