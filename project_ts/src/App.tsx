
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
    </div>
  );
};

export default Home;
