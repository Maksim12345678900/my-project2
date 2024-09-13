import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      setBooks(data.books);
    }, 2000);
  }, []);

  return (
    <div>
      <h1>Главная страница</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
      <p>
        <Link to="/about">О сайте</Link>
      </p>
    </div>
  );
};

export default Home;