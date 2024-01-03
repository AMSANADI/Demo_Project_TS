import { BrowserRouter, Routes,Route,Navigate} from 'react-router-dom';
import Login from './components/Login';
import Recipe from './components/Recipe';
import Home from './components/Home';

function App() {

  return (
<div className="App">
<BrowserRouter>
<Routes>
<Route path = "/login" element={<Login/>}></Route>
<Route path = "/home" element={<Home/>}></Route>
 <Route path = "/recipe/:name" element={<Recipe/>}></Route> 
</Routes>
</BrowserRouter>

    </div>
  );
};

export default App;

