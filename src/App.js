import { useEffect, useState } from 'react';
import './App.css';
import logo from './strawberry1.png';
import video from './food.mp4';
import MyRecipesComponents from './MyRecipesComponent';




function App() {

const MY_ID = "a9077d54";
const MY_KEY = "6c07880b123600bfa0f7544704eed00b";
 
const [mySearch, setMySearch] = useState("");
const [myRecipes, setMyRecipes] = useState([]);
const [wordSumbitted, setWordSumbitted] = useState("strawberry")


useEffect(() => {
const getRecipe = async () => {
const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSumbitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
const data = await response.json();
console.log(data.hits)
setMyRecipes(data.hits);
}
getRecipe()
}, [wordSumbitted])


const myRecipeSearch = (e) => {
console.log(e.target.value)
 setMySearch(e.target.value)
}

const finalSearch = (e) => {
e.preventDefault()
setWordSumbitted(mySearch)
}

  return(
  <div className="App">
    <img src={logo} className="logo" alt='logo'/>

    <div className="container">
     <video autoPlay muted loop>
     <source src={video} type="video/mp4" />
     </video>
    </div>

    <h1>Find & Cook</h1>
   
    <div className="container">
     <form onSubmit={finalSearch}>
     <input className='searchinput' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}/>
     <svg className='searchicon'  onClick={ finalSearch } xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 16 16">
      <path d="M6.5 13a6.474 6.474 0 0 0 3.845-1.258h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.008 1.008 0 0 0-.115-.1A6.471 6.471 0 0 0 13 6.5 6.502 6.502 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13Zm0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
     </svg>
     </form>
    </div>

 <br/>

   {myRecipes.map((element, index) => (
    <MyRecipesComponents key={index}
    label={element.recipe.label} 
    image={element.recipe.image} 
    calories={element.recipe.calories}
    weight={element.recipe.totalWeight} 
    ingredients={element.recipe.ingredientLines}
    instructions={element.recipe.url}
    source={element.recipe.source}
    like = {element.recipe.yield}
    servings={element.recipe.yield}
    />
   ))}



  <a className='footer line' href='https://portfolio-alia-borovik.glitch.me' target="_blank" rel="noreferrer">
          Developed by ALIA
  </a>     

<br/>
        
  </div>
  );
}

export default App;
