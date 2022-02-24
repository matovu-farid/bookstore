import BookList from '../components/BookList/BookList';
import Form from '../components/Form/Form';

import './Books.css';

const Books = () => (
  <div className="book-page">
    <BookList />
    <Form />
  </div>
);

export default Books;
