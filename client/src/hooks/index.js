import { useState, useEffect } from "react";
import { USERS_URL } from "../constants";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(USERS_URL);
      const resUsers = await res.json();
      console.log(resUsers);
      setUsers(resUsers);
    };
    getUsers();
  }, []);
  return { users };
};
