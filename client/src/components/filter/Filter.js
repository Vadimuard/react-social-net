import { FilterInput } from './FilterInput';
import { ACTIONS } from '../users/FilteredUsers';
import PropTypes from 'prop-types';

import './Filter.scss';

const names = ['email', 'website', 'city'];

export const SORT_BY = {
  DEFAULT: 'def',
  USERNAME_ASC: 'username-asc',
  USERNAME_DESC: 'username-desc',
};

export const Filter = ({ dispatch }) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const [email, website, city] = names.map(name => ev.target[name].value);
    dispatch({ type: ACTIONS.APPLY_FILTER, payload: { email, website, city } });
  };

  const handleReset = () => {
    document.getElementById('filter').reset();
    dispatch({ type: ACTIONS.RESET_FILTER });
  };

  const handleSortToggle = (ev) => {
    dispatch({ type: ACTIONS.SORT_BY, payload: { sortBy: ev.target.value } });
  };

  return (
    <div className='cards-filters text-gray-400'>
      <div className='text-lg font-bold mx-4 my-2'>Filter users</div>
      <form id='filter' onSubmit={handleSubmit}>
        <div className='cards-filters__inputs'>
          <FilterInput name='email' />
          <FilterInput name='website' />
          <FilterInput name='city' />
        </div>
        <button className='btn'>Apply</button>
      </form>
      <div className='cards-filters__footer'>
        <button className='btn' onClick={handleReset}>
          Reset filters
        </button>
        <select name='sort' onChange={handleSortToggle} className='select'>
          <option defaultValue={SORT_BY.DEFAULT}>Sort by</option>
          <option value={SORT_BY.USERNAME_ASC}>Username ascending</option>
          <option value={SORT_BY.USERNAME_DESC}>Username descending</option>
        </select>
      </div>
    </div>
  );
};

Filter.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

