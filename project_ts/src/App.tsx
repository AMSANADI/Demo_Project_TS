import { BrowserRouter, Routes,Route} from 'react-router-dom';
 
import Recipe from './components/Recipe';
import Login from './components/Login';
import Dishes from './components/Dishes';
 
function App() {
 
  return (
<div className="App">
<BrowserRouter>
<Routes>
<Route path = "/" element={<Login/>}></Route>
<Route path = "/home" element={<Dishes searchQuery=''/>}></Route>
 <Route path = "/recipe/:name" element={<Recipe/>}></Route>
</Routes>
</BrowserRouter>
 
    </div>
  );
};
 
export default App;