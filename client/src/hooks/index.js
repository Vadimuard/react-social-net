import { USERS_URL } from '../constants';
import { useEffect, useState } from 'react';
import { filterUsers, sortUsersBy } from '../helpers';

export const useUsers = ({ email, website, city, sortBy }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(USERS_URL);
      const resUsers = await res.json();
      const filteredUsers = filterUsers(resUsers, { email, website, city });
      const sortedUsers = sortUsersBy(filteredUsers, sortBy);
      setUsers(sortedUsers);
    };
    getUsers();
  }, [email, website, city, sortBy]);
  return { users };
};

