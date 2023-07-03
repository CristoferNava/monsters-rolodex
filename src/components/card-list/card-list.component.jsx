const CardList = ({ users }) => {
  console.log("Rendering the card list");
  return (
    <ul>
      {users.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </ul>
  );
};

export default CardList;
