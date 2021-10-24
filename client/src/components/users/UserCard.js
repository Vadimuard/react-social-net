export const UserCard = ({ user }) => {
  return (
    <>
      <h3 className="card__prop text-lg font-bold">{user.name}</h3>
      <div>{user.username}</div>
      <div>{user.address.city}</div>
      <div>{user.email}</div>
      <div>{user.website}</div>
    </>
  );
};
