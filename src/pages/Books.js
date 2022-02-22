import BookList from '../components/BookList/BookList';
import './Books.css';

const Books = () => (
  <div className="book-page">
    <BookList />
    <form className="book-form">
      <input type="text" placeholder="Book title ..." />

      <select aria-label="categories" defaultValue="">
        <option value="" disabled hidden>Category</option>
        <option>Category 1</option>
        <option>Category 2</option>
        <option>Category 3</option>
      </select>
      <button type="submit">Add book</button>
    </form>
  </div>
);

export default Books;
