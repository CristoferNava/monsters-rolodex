import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

import { useEffect, useState } from "react";
const API_BASE_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_BASE_URL);
      const responseJSON = await response.json();
      setUsers(responseJSON);
    };
    fetchData();
  }, []);

  const handleTextInput = (e) => {
    setInput(e.target.value);
  };

  const filteredUsers = filterUsers(input, users);

  return (
    <>
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox value={input} onChange={handleTextInput} />
      <CardList users={filteredUsers} />
    </>
  );
}

function filterUsers(input, users) {
  const cleanedInput = input.toLowerCase().trim();
  const filteredUsers = [];
  for (const user of users) {
    const userName = user.name.toLowerCase().trim();
    if (startsWith(userName, cleanedInput)) filteredUsers.push(user);
  }

  return filteredUsers;
}

function startsWith(string1, string2) {
  // Checks if string1 starts with string2
  if (string2.length > string1.length) return false;
  for (let idx = 0; idx < string2.length; idx++) {
    if (string2[idx] !== string1[idx]) return false;
  }
  return true;
}

export default App;
