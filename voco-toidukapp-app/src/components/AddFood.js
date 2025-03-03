import React, { useState } from 'react';

const AddFood = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [dateAdded, setDateAdded] = useState('');
  const [expiry, setExpiry] = useState('');
  const [category, setCategory] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, dateAdded, expiry, category, comments });
    setName('');
    setDateAdded('');
    setExpiry('');
    setCategory('');
    setComments('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Toidu nimi:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Lisamise kuupäev:</label>
        <input type="date" value={dateAdded} onChange={(e) => setDateAdded(e.target.value)} required />
      </div>
      <div>
        <label>Säilivuse hinnanguline aeg:</label>
        <input type="date" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
      </div>
      <div>
        <label>Kategooria:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
      </div>
      <div>
        <label>Kommentaarid:</label>
        <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
      </div>
      <button type="submit">Lisa toit</button>
    </form>
  );
};

export default AddFood;