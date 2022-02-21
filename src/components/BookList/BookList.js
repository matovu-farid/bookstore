import BookItem from '../BookItem/BookItem';

const BookList = () => {
  const data = [];
  return (
    <ul>
      {data.map(({
        author, name, category, id,
      }) => (
        <li key={id}>
          <BookItem
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
