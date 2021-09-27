import React,{useState,useEffect} from 'react';
import Recepit from './Recepit';
import './App.css';
function App() {

  
  const [query, setQuery] = useState('');
  const [finalsearch, setSearch] = useState('chicken');
  
  const [recepits, setRecepits] = useState([]);

  const searchHandler = (e)=>{
    e.preventDefault();
    setSearch(query);
  }

  const updateQuery = (e) => {
    setQuery(e.target.value);
    console.log(query);
  }

  //api start

  const APP_ID = '222087e5';
  const APP_KEYS = '56eb00a1a65d892912e6b28d28e3f6db';

  //const API_URL = `https://api.edamam.com/api/recipes/q=chicken&app_id=${APP_ID}&app_key=${APP_KEYS}`;


  useEffect(() => {
    getApidata();
    
  }, [finalsearch]);

  const getApidata =async () => {
    const res = await fetch(`https://api.edamam.com/search?q=${finalsearch}&app_id=${APP_ID}&app_key=${APP_KEYS}`);
    const data = await res.json();
    console.log(data);
    setRecepits(data.hits);

  }

  


  return (
    <div className="app">
      <h1 className="title">Search For Cooking recepits</h1>
      <form action="" className="search-form" onSubmit={searchHandler}>
        <input type="text" className="search-bar" value={query} onChange={updateQuery} />
        <button type="submit" className="search-button" >Search</button>
      </form>
      <div className="recepits-list">
        
        {recepits.map((recepit) => (
          <Recepit key={Math.random(1, 1000)}
            label={recepit.recipe.label}
            photo={recepit.recipe.image}
            ingredients={recepit.recipe.ingredients}
            type={recepit.recipe.mealType}
            takentime={recepit.recipe.totalTime}
          />
        ))}
        
      </div>
    </div>
  )
}
export default App;
