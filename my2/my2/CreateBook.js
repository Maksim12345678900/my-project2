import React, { useState } from 'react';

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { title, author, description };
    // Send request to server to create new book
    fetch('/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBook),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Создание новой книги</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Название:
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        </label>
        <br />
        <label>
          Автор:
          <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} />
        </label>
        <br />
        <label>
          Описание:
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
        </label>
        <br />
        <button type="submit">Создать книгу</button>
      </form>
    </div>
  );
};

export default CreateBook;