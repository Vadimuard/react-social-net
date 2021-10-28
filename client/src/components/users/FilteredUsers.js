import { useUsers } from '../../hooks';
import { useReducer } from 'react';
import { Users } from './Users';
import { Filter } from '../filter/Filter';
import { SORT_BY } from '../filter/Filter';

import './Users.scss';

export const ACTIONS = {
  APPLY_FILTER: 'apply-filter',
  RESET_FILTER: 'reset-filter',
  SORT_BY: 'sort-by',
};

const initialFilterState = {
  email: '',
  website: '',
  city: '',
  sort_by: SORT_BY.DEFAULT,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.APPLY_FILTER:
      return { ...state, ...(action.payload) };
    case ACTIONS.RESET_FILTER:
      return { ...state, ...initialFilterState };
    case ACTIONS.SORT_BY:
      return { ...state, ...(action.payload) };
  }
};

export const FilteredUsers = () => {
  const [state, dispatch] = useReducer(reducer, initialFilterState);
  const { users } = useUsers(state);

  return (
    <>
      <Filter dispatch={dispatch} />
      <Users users={users} />
    </>
  );
};
