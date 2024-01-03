import './Recipe.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';

interface ExtendedIngredient {
    id: number;
    original: string;
    // Add other properties if available in the API response
  }

interface RecipeDetails{
    title: String;
    image: string;
    instructions: string;
    summary: string;
    extendedIngredients: ExtendedIngredient[];
}

const Recipe:React.FC=()=>{
   
    let params = useParams();
    const [details, setDetails] = useState<RecipeDetails | null>(null);
   const [activeTab, setActiveTab] =useState('instructions');
    const getDetails= async() => {
       const data =await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
       const detailData =await data.json();
       setDetails(detailData);
       console.log(detailData);
    }
useEffect(() =>{
   getDetails();
}, [params.name]);
    return <div> <div className='wrapper'>
   <div >
     <h2> {details?.title}</h2>
     <img src={details?.image} alt=""></img>
   </div>
   <div className='info'>
    <button className={activeTab==='ingredients' ? 'active': ''} onClick={() => setActiveTab('ingredients')}>Ingredients</button>
    <button className={activeTab==='instructions' ? 'active': ''} onClick={() => setActiveTab('instructions')} >See Recipe</button>
    {activeTab === 'instructions' && (<div>
        {/* <h3 dangerouslySetInnerHTML={{__html:details?.summary || ''}}></h3> */}
        <h3 dangerouslySetInnerHTML={{__html:details?.instructions || ''}}></h3>
    </div>)}
    {activeTab === 'ingredients' && (<ul>
    {details?.extendedIngredients.map((ingredient)=>(
        <li key={ingredient.id}>{ingredient.original}</li>
    ))}
</ul>)}

</div></div></div>
}
export default Recipe;