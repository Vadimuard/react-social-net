import { useUsers } from "../hooks";
import { UserCard } from "./UserCard";

export const Users = () => {
  const { users } = useUsers();
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  );
};
