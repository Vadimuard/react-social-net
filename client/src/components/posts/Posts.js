import PropTypes from 'prop-types';
import { Post } from './Post';

export const Posts = ({ posts }) => {
  return (
    <ul className='cards-list'>
      {posts.map(post => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
};

Posts.propTypes = {
  posts: PropTypes.array,
};
