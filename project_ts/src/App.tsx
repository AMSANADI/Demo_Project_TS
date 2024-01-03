<<<<<<< HEAD
// Home.tsx
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Dishes from "./components/Dishes";
const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Dishes searchQuery={searchQuery} />
=======
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

>>>>>>> 054b3e1f16dfd8fcd647341a7214cc160610ed47
    </div>
  );
};

export default Home;
