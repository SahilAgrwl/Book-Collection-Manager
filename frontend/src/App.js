import React, { useState, useEffect } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import { getBooks, addBook, updateBook, deleteBook } from './api';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

const App = () => {
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const { data } = await getBooks();
      setBooks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveBook = async (book) => {
    if (currentBook) {
      await updateBook(currentBook._id, book);
    } else {
      await addBook(book);
    }
    setCurrentBook(null);
    fetchBooks();
  };

  const handleEditBook = (book) => {
    setCurrentBook(book);
  };

  const handleDeleteBook = async (id) => {
    await deleteBook(id);
    fetchBooks();
  };

  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.year.toString().includes(searchQuery)
    );
  });

  return (
    <div>
      
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <BookForm book={currentBook} onSave={handleSaveBook} />
      <BookList books={filteredBooks} onEdit={handleEditBook} onDelete={handleDeleteBook} />
    </div>
  );
};

export default App;
