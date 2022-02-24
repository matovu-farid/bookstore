import PropTypes from 'prop-types';
import 'react-circular-progressbar/dist/styles.css';
import './BookItem.css';
import ItemEnd from './ItemEnd/ItemEnd';
import ItemMiddle from './ItemMiddle/ItemMiddle';
import ItemStart from './ItemStart/ItemStart';

const BookItem = ({
  title, author, id,
}) => (
  <div className="item-card">

    <ItemStart title={title} author={author} id={id} />
    <ItemMiddle />
    <ItemEnd />
  </div>
);
BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default BookItem;
