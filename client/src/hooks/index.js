import { USERS_URL } from '../constants';
import { useEffect, useState } from 'react';
import { SORT_BY } from '../components/filter/Filter';

const sortUsersBy = (users, sortBy) => {
  switch (sortBy) {
    case SORT_BY.DEFAULT:
      // no sorting
      break;
    case SORT_BY.USERNAME_ASC:
      users.sort((a, b) => {
        const usernameA = a.username.toLowerCase();
        const usernameB = b.username.toLowerCase();
        if (usernameA < usernameB) return -1;
        if (usernameA > usernameB) return 1;
        return 0;
      });
      break;
    case SORT_BY.USERNAME_DESC:
      users.sort((a, b) => {
        const usernameA = a.username.toLowerCase();
        const usernameB = b.username.toLowerCase();
        if (usernameA > usernameB) return -1;
        if (usernameA < usernameB) return 1;
        return 0;
      });
      break;
  }
  return users;
};

const filterUsers = (users, { city, email, website }) => {
  return users.filter((user) => {
    city = city.toLowerCase();
    email = email.toLowerCase();
    website = website.toLowerCase();
    if (!user.address.city.toLowerCase().includes(city)) return false;
    if (!user.email.toLowerCase().includes(email)) return false;
    return user.website.toLowerCase().includes(website);
  });
};

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

