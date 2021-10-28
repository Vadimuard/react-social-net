import { SORT_BY } from '../components/filter/Filter';

export const sortUsersBy = (users, sortBy) => {
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

export const filterUsers = (users, { city, email, website }) => {
  return users.filter((user) => {
    city = city.toLowerCase();
    email = email.toLowerCase();
    website = website.toLowerCase();
    if (!user.address.city.toLowerCase().includes(city)) return false;
    if (!user.email.toLowerCase().includes(email)) return false;
    return user.website.toLowerCase().includes(website);
  });
};
