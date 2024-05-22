import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, onEdit, onDelete }) => (
  <table class="table table-striped table-dark" style={{ marginTop: '20px'}}>
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Author</th>
        <th scope="col">Genre</th>
        <th scope="col">Year</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book) => (
        <BookItem key={book._id} book={book} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </tbody>
  </table>
);

export default BookList;
