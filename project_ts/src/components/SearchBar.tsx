
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '../components/SearchBar.scss';
import { GiKnifeFork } from "react-icons/gi";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <div>
        <div className='header'>
            <GiKnifeFork className='logo'/>
            <p>Enjoy Your <span>Special</span> Delicious Meal</p>
        </div>
         <div className="search_bar">
            <form className="search_form">
                <FaSearch />
                <input type="text" onChange={handleInputChange} />
            </form>
         </div>
    </div>
  );
};

export default SearchBar;
