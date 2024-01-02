import Dishes from "../components/Dishes";
import Navbar from "../components/Navbar";
import React from "react";

const Home: React.FC = () => {
    const handleSearch = (query: string) => {
      // Handle search logic here
      console.log(`Searching for: ${query}`);
    };
  
    return (
      <div>
        <Navbar onSearch={handleSearch} />
        {/* Other components and content */}
        <Dishes/>
      </div>
    );
  };
  
  export default Home;