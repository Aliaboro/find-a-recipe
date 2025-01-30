import './App.css';
import cookie from './strawberry2.png';

function MyRecipesComponents({label, image, calories,weight, ingredients,like, servings, instructions, source}) {
    return(<div>
        
        <div className="container">
        <h2>{label}</h2>
        </div>
     
        <div className="container">
        <img className="foodpicture" src= {image} alt="dish"/>
        </div>

        <div className="container">
        <h3>{servings} Servings</h3>
        </div>

        <ul className="list">
        {ingredients.map((ingredient, index) => (
          <li className='info kcal' key={index}>
          {ingredient}
          </li>  
        ))}
        </ul>

        <div className="container">
        <div className='object'>
        <p className='info'> { like } </p>
            <svg className='heart' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
        </div>

        
        <p className='info object'>{calories.toFixed()} <span className='kcal'>kcal</span></p>
        <p className='info object'>{weight.toFixed()} <span className='kcal'>g</span></p>
        </div>
       
  
        <h3>Instructions:
            <button className="cta">
              <span><a href={instructions} rel="noreferrer" target="_blank">{source}</a></span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </h3>

        <img className='cookie App-logo' src={cookie} alt = "coockie" />

       
    </div>)
}

export default MyRecipesComponents;
