import { useState, useEffect } from 'react';
import MotorbikeParts from './MotorbikeParts';
import axios from 'axios';
import './Read.css';

const Read = () => {
  const [motorbikeParts, setMotorbikeParts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/api/motorbikeParts')
      .then((response) => {
        setMotorbikeParts(response.data.parts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Filter parts based on search term
  const filteredParts = motorbikeParts.filter((part) => {
    return part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           part.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h3>Motorbike Parts List</h3>

      {/* Search bar */}
      <input 
        type="text"
        placeholder="Search for motorbike parts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Pass the filtered list to MotorbikeParts */}
      <MotorbikeParts myParts={filteredParts} setMotorbikeParts={setMotorbikeParts} />
    </div>
  );
};

export default Read;
