import { useSelector } from 'react-redux';

import BookItem from '../BookItem/BookItem';
import './BookList.css';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <ul className="book-list">
      {books.map(({
        author, title, id,
      }) => (
        <li key={id}>
          <BookItem
            id={id}
            author={author}
            title={title}
          />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
