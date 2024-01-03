import React, { useEffect, useState } from 'react';
import Dishes from "../components/Dishes";
import Navbar from "../components/Navbar";
const HomePage: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const handleSearch = (query: string) => {
    // Handle search logic here
    console.log(`Searching for: ${query}`);
  };
  useEffect(() => {
    const userNameFromSession = sessionStorage.getItem('userName');
    if (userNameFromSession) {
      setUserName(userNameFromSession);
    }
  }, []);

  return (
    <div>
      <h1>Welcome, {userName}</h1>
      <Navbar onSearch={handleSearch} />
      <Dishes/>
    </div>
  );
};

export default HomePage;
