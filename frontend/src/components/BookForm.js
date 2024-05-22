import React, { useState, useEffect } from 'react';

const BookForm = ({ book, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    year: ''
  });

  useEffect(() => {
    if (book) {
      setFormData(book);
    }
  }, [book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({
      title: '',
      author: '',
      genre: '',
      year: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="form-row justify-content-around d-flex" style={{ marginTop: '20px', marginBottom: '20px' }}>
      <div class = "col-2" ><input name="title"  class="form-control"  value={formData.title} onChange={handleChange} placeholder="Title" required /> </div>
      <div class = "col-2" ><input name="author"  class="form-control"  value={formData.author} onChange={handleChange} placeholder="Author" required /></div>
      <div class = "col-2" ><input name="genre"  class="form-control"  value={formData.genre} onChange={handleChange} placeholder="Genre" required /></div>
      <div class = "col-2" ><input name="year"  class="form-control"  value={formData.year} onChange={handleChange} placeholder="Year" required /></div>
      </div>
  
      <div class="text-center">
        <button type="submit" class="btn btn-primary">Save Book</button>
    </div>
      
    </form>
  );
};

export default BookForm;
