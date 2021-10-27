import PropTypes from 'prop-types';

const UserCard = ({ user }) => {
  return (
    <>
      <h3 className='text-lg font-bold font-serif text-center mb-2'>
        {user.name}
      </h3>
      <div className='font-bold flex justify-between'>
        @{user.username}
        <span className='text-gray-400'>from {user.address.city}</span>{' '}
      </div>
      <div>{user.email}</div>
      <div>{user.website}</div>
    </>
  );
};

UserCard.propTypes = {
  user: PropTypes.node.isRequired,
};

export { UserCard };
