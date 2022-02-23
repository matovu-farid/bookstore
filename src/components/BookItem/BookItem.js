import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';
import './BookItem.css';

const BookItem = ({
  title, author, id,
}) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(removeBook(id));
  };
  return (
    <div className="item-card">

      <div className="item-start">
        <p>{title}</p>

        <p>{author}</p>
        <button type="button" onClick={onClick}>Remove</button>
      </div>
      <div className="item-middle">
        <CircularProgressbar value={66} text={`${66}%`} />
      </div>
      <div>
        <p>CURRENT CHAPTER</p>
        <p>CHAPTER 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};
BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default BookItem;
