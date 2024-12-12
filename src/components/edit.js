import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Edit() {
  const { id } = useParams();  // Get the motorbike part ID from the URL
  const [name, setName] = useState("");  
  const [description, setDescription] = useState("");  
  const [price, setPrice] = useState("");  
  const [image, setImage] = useState("");  
  const navigate = useNavigate();  // Hook to navigate after successful update

  // Fetch the motorbike part data when the component mounts
  useEffect(() => {
    axios.get(`http://localhost:4000/api/motorbikePart/${id}`)
      .then((response) => {
        setName(response.data.name);  // Set the part name
        setDescription(response.data.description);    // Set the part description
        setPrice(response.data.price);  // Set the part price
        setImage(response.data.image);  // Set the part image URL
      })
      .catch((error) => {
        console.log('Error fetching motorbike part:', error);
      });
  }, [id]);  // Dependency array ensures this only runs when the motorbike part ID changes

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent default form submission behavior

    // Create an object with the updated motorbike part data
    const updatedPart = { name, description, price, image };

    // Send PUT request to update the motorbike part
    axios.put(`http://localhost:4000/api/motorbikeParts/${id}`, updatedPart)
      .then((response) => {
        console.log('Motorbike part updated:', response.data);  // Log the updated part
        navigate('/read');  // Redirect to the read page (or any page you'd like)
      })
      .catch((error) => {
        console.error('Error updating motorbike part:', error);  // Handle any errors
      });
  };

  return (
    <div>
      <h2>Edit Motorbike Part</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Edit Part Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}  // Update state on change
          />
        </div>
        <div className="form-group">
          <label>Edit Part Description:</label>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}  // Update state on change
          />
        </div>
        <div className="form-group">
          <label>Edit Part Price:</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}  // Update state on change
          />
        </div>
        <div className="form-group">
          <label>Edit Image URL:</label>
          <input
            type="text"
            className="form-control"
            value={image}
            onChange={(e) => setImage(e.target.value)}  // Update state on change
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Edit Motorbike Part"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
