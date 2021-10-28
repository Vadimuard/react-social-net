import PropTypes from 'prop-types';

export const FilterInput = ({ name }) => {
  return (
    <div className='cards-filters__item'>
      <div>{name}</div>
      <input
        className='input'
        name={name}
        type='text'
      />
    </div>
  );
};

FilterInput.propTypes = {
  name: PropTypes.string.isRequired,
};
