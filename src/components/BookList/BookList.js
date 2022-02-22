import { useState } from 'react';
import { books } from '../../redux/books/books';
import BookItem from '../BookItem/BookItem';

const BookList = () => {
  const data = useState(books);
  return (
    <ul>
      {data.map(({
        author, name, category, id,
      }) => (
        <li key={id}>
          <BookItem
            id={id}
            author={author}
            name={name}
            category={category}
          />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
