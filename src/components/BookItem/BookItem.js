import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const BookItem = ({
  title, author, id,
}) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <p>{title}</p>

      <p>{author}</p>
      <button type="button" onClick={onClick}>Remove</button>
    </div>
  );
};
BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default BookItem;
