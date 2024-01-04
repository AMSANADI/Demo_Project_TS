// DisplayName.tsx
import React from 'react';
import "../components/DisplayName.scss"

interface DisplayNameProps {
  // Remove userName from props since it will be retrieved from sessionStorage
}

const DisplayName: React.FC<DisplayNameProps> = () => {
  // Retrieve the userName from sessionStorage
  const userName = sessionStorage.getItem('userName');

  return (
    <div className='userName'>
      {/* Check if userName is available before displaying */}
      {userName && <p>Hello: {userName}!</p>}
    </div>
  );
}

export default DisplayName;
