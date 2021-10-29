import PropTypes from 'prop-types';

export const PostInterface = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
});

export const Post = ({ post }) => {
  return (
    <div className='card'>
      <h2 className='text-lg font-bold'>{post.title}</h2>
      <div>{post.body}</div>
    </div>
  );
};

Post.propTypes = {
  post: PostInterface,
};
