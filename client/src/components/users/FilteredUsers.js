import { useUsers } from '../../hooks';
import { useReducer } from 'react';
import { Users } from './Users';

import './Users.scss';

const initialFilterState = {
  email: '',
  website: '',
  city: '',
};

const reducer = (state, action) => {
  if (action.type === 'reset') {
    return initialFilterState;
  }
  const result = { ...state };
  result[action.type] = action.value;
  return result;
};

export const FilteredUsers = () => {
  const [filter, dispatch] = useReducer(reducer, initialFilterState);
  const { email, website, city } = filter;
  const { users } = useUsers(filter);

  const handleInput = (ev) => {
    const { name, value } = ev.target;
    dispatch({ type: name, value });
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  // TODO sort by username
  return (
    <>
      <div className="cards-filters text-gray-400">
        <div className="text-lg font-bold mx-4 my-2">Filter users</div>
        <div className="cards-filters__inputs">
          <div className="cards-filters__item">
            <div>Email</div>
            <input
              className="input"
              name="email"
              type="text"
              value={email}
              onChange={handleInput}
            />
          </div>
          <div className="cards-filters__item">
            <div>Website</div>
            <input
              className="input"
              name="website"
              type="text"
              value={website}
              onChange={handleInput}
            />
          </div>
          <div className="cards-filters__item">
            <div>City</div>
            <input
              className="input"
              name="city"
              type="text"
              value={city}
              onChange={handleInput}
            />
          </div>
        </div>
        <button className="btn" onClick={handleReset}>
          Reset filters
        </button>
      </div>
      <Users users={users} />
    </>
  );
};
