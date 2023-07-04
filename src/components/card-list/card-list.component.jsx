import "./card-list.styles.css";

const CardList = ({ users }) => {
  return (
    <div className="card-list">
      {users.map((user) => (
        <div key={user.id} className="card-container">
          <img
            src={`https://robohash.org/${user.id}?set=2&size=180x180`}
            alt={`user ${user.name}`}
          />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
