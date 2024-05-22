import React from 'react';
import './BookActions.css';

const BookItem = ({ book, onEdit, onDelete }) => (
  <tr  scope="row">
    <td>{book.title}</td>
    <td>{book.author}</td>
    <td>{book.genre}</td>
    <td>{book.year}</td>
    <td>
    <button onClick={() => onEdit(book)} className="edit-button">
        <i className="fas fa-edit"></i> Edit
      </button>
      <button onClick={() => onDelete(book._id)} className="delete-button">
        <i className="fas fa-trash-alt"></i> Delete
      </button>
    </td>
  </tr>
);

export default BookItem;
