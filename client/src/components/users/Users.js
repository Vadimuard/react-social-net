import { UserCard, UserInterface } from './UserCard';
import PropTypes from 'prop-types';

const Users = ({ users }) => {
  return (
    <ul className='cards-list'>
      {users.map((user) => (
        <li key={user.id} className='card'>
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  );
};

Users.propTypes = {
  users: PropTypes.arrayOf(UserInterface),
};

export { Users };
