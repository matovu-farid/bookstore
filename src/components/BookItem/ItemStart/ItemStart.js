import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../../redux/books/books';
import './ItemStart.css';

const ItemStart = ({ title, author, id }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(removeBook(id));
  };
  return (
    <div className="item-start">
      <p className="title">{title}</p>

      <p className="blue-text">{author}</p>
      <ul className="options-list">
        <li className="item">
          <button className="item-button blue-text" type="button">Comments</button>
        </li>
        <li className="item remove">
          <div className="vertical-separator" />
          <button className=" item-button blue-text" type="button" onClick={onClick}>Remove</button>
          <div className="vertical-separator" />
        </li>
        <li className="item">
          <button className="item-button blue-text" type="button">Edit</button>
        </li>
      </ul>
    </div>
  );
};

ItemStart.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ItemStart;
