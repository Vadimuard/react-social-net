import { useEffect, useState } from 'react';
import { USERS_URL } from '../constants';

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

export const useUsers = ({ city, email, website }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(USERS_URL);
      const resUsers = await res.json();
      setUsers(filterUsers(resUsers, { city, email, website }));
    };
    getUsers();
  }, [city, email, website]);
  return { users };
};
