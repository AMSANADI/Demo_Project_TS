// Navbar.tsx
import React, { useState } from 'react';
import "../components/Navbar.scss";

interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <nav className='navbar'>
        <div className="navbar-right">
            <a href="/">Home</a>
        </div>
      <div className="navbar-left">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for recipes..."
          />
          <button type="submit">Search</button>
        </form>
        
      </div>
      
    </nav>
    
  );
};

export default Navbar;
