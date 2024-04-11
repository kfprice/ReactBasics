import { useState } from 'react';

const User = () => {
  //   const [firstName, setFistName] = useState('Kemet');
  //   const [lastName, setLastName] = useState('Price');
  //   const [email, setEmail] = useState('Kemet.Price1@gamil.com');

  const [user, setUser] = useState({
    firstName: 'Kemet',
    lastName: 'Price',
    email: 'Kemet.Price1@gmail.com',
  });
  function updateUser() {
    // setFistName('James');
    // setLastName('Gosling');
    // setEmail('JGosling123@gmail.com');
    setUser({
      firstName: 'James',
      lastName: 'Gosling',
      email: 'JGosling123@gmail.com',
    });
  }
  return (
    <div>
      <h1>User Details</h1>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.email}</p>

      <button onClick={updateUser}>Update User</button>
    </div>
  );
};

export default User;
