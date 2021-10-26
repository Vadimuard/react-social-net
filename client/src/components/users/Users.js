import { UserCard } from './UserCard';

export const Users = ({ users }) => {
  return (
    <ul className="cards-list">
      {users.map((user) => (
        <li key={user.id} className="card">
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  );
};
