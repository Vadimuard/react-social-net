import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { Posts } from '../posts/Posts';
import { usePosts } from '../../hooks';
import { useState } from 'react';

const UserInterface = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  website: PropTypes.string,
  address: PropTypes.shape({
    city: PropTypes.string,
  }),
});

Modal.setAppElement('#root');

const UserCard = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const posts = usePosts({ userId: user.id, isModalOpen, isFirstLoad });

  const handleCloseBtn = () => {
    setIsModalOpen(false);
    setIsFirstLoad(false);
  };

  return (
    <>
      <div onDoubleClick={() => setIsModalOpen(true)}>
        <h3 className='text-lg font-bold font-serif text-center mb-2'>
          {user.name}
        </h3>
        <div className='font-bold flex justify-between'>
          @{user.username}
          <span className='text-gray-400'>from {user.address.city}</span>{' '}
        </div>
        <div>{user.email}</div>
        <div>{user.website}</div>
      </div>
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseBtn} className='modal' overlayClassName='modal-overlay'>
        <Posts posts={posts} />
        <button className='btn btn-cancel m-4' onClick={handleCloseBtn}>Close</button>
      </Modal>
    </>
  );
};

UserCard.propTypes = {
  user: UserInterface,
};

export { UserCard, UserInterface };
