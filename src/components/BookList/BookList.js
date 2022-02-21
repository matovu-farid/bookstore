import BookItem from '../BookItem/BookItem';

const BookList = () => {
  const fakeData = [
    {
      id: '1',
      name: 'Hunger games',
      author: 'Jake',
      category: 'Science Fiction',
    },
    {
      id: '2',
      name: 'Hunger games',
      author: 'Jake',
      category: 'Science Fiction',
    },

  ];
  return (
    <ul>
      {fakeData.map(({
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
