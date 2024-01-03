import React from 'react'
 
interface DisplayNameProps {
    userName: string;
  }
  const DisplayName: React.FC<DisplayNameProps> = (props) => {
  return (
    <div style={{ position: 'absolute', top: 10, right: 10 }}>
      <p>Hello: {props.userName}!</p>
    </div>
  )
}
 
export default DisplayName