/*import logo from './logo.svg';*/
import './App.css';
import { useState } from "react";
import Contacts from './contacts.json';



function App() {
//Iteration 1
  const firstContacts = Contacts.slice(0,5);
  const [ contacts, setContacts ] = useState(firstContacts);
//Iteration 3
  const addContact = () => {
    const random = Math.floor(Math.random() * Contacts.length);
    const randomContact = Contacts.splice(random, 1);
    setContacts(contacts.concat(randomContact));
  };
//Iteration 4
  const sortPopularity = () => {
    const sortedContacts = firstContacts
      .sort((a, b) => b.popularity - a.popularity)
      .slice();

    setContacts(sortedContacts);
  };

  const sortName = () => {
    const sortedContacts = firstContacts.sort((a, b) => 
    a.name.toUpperCase().localeCompare(b.name.toUpperCase())
    );
    setContacts([...sortedContacts]);
  };

  //Iteration 5
  const deleteContact = (contactId) => {
    const filteredAgenda = contacts.filter((contact) => contact.id !== contactId);
    setContacts(filteredAgenda);
  };

  //Iteration 4 is on line 67-68
  
return (<div className="App">
  <h1>IronContacts</h1>
    <div className='button'>
      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      <button onClick={sortName}>Sort by name</button>
    </div>
    <table className="table">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won <br/>Oscar</th>
          <th>Won <br/>Emmy</th>
          <th>Action</th>
        </tr>
    </thead>
    <tbody>
      {contacts.map(contact=> {
         return(
          <tr key={contact.id}>
            <td><img className="images" src={contact.pictureUrl} alt=""></img> </td>
           <td>{contact.name}</td>
           <td>{contact.popularity.toFixed(2)}</td>
           <td>{contact.wonOscar && "🏆"}</td>
           <td>{contact.wonEmmy && "🏆"}</td>
           <td><button onClick={() => {deleteContact(contact.id);}}>DELETE</button></td>
          </tr>);
        })}
      </tbody>
    </table>
  </div>);
}

export default App;
