import PropTypes from 'prop-types';

const BookItem = ({ name, category, author }) => (
  <div>
    <p>{name}</p>
    <p>{category}</p>
    <p>{author}</p>
    <button type="button">Remove</button>
  </div>
);
BookItem.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BookItem;
