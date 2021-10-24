import { useUsers } from "../../hooks";
import { UserCard } from "./UserCard";
import "./Users.scss";

export const Users = () => {
  const { users } = useUsers();
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
