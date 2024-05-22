import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header>
      <nav class="navbar navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
      <div class="navbar-brand mb-0 h1"  style={{ marginLeft: '20px' }}> BOOK MANAGER</div>
      <div  style={{ marginRight: '20px' }} >
                <form class="form-inline" >
                    <input  class="form-control mr-sm-2" type="search" placeholder="Search by title, author, genre, or year"  value={searchQuery}
                     onChange={handleChange} aria-label="Search" />
                    
                </form>
            </div>
      </nav>
</header>
  );
};

export default SearchBar;
