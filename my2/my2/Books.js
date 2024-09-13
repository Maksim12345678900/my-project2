import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const { searchParams } = useParams();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('https://example.com/books');
      const data = await response.json();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredBooks = books.filter((book) => book.title.includes(search));

  return (
    <div>
      <h1>Книги</h1>
      <input type="search" value={search} onChange={handleSearch} />
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;