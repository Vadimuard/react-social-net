export const UserCard = ({ user }) => {
  return (
    <div className="mt-5">
      <h3 className="text-lg font-bold">{user.name}</h3>
      <div>{user.username}</div>
    </div>
  );
};
