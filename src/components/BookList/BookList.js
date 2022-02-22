import { useSelector } from 'react-redux';

import BookItem from '../BookItem/BookItem';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <ul>
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
