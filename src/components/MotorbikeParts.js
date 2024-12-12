import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import axios from 'axios'; // Import axios to make HTTP requests

const MotorbikeParts = (props) => {

  // Handle the delete logic
  const handleDelete = (id) => {
    // Call the delete API here (example: axios.delete)
    axios.delete(`http://localhost:4000/api/motorbikeParts/${id}`)
      .then((response) => {
        console.log('Motorbike part deleted:', response.data);
        // Optionally update the UI to reflect the deleted part
        props.setMotorbikeParts(prevParts => prevParts.filter(part => part._id !== id));
      })
      .catch((error) => {
        console.error('Error deleting motorbike part:', error);
      });
  };

  return (
    <div className="motorbike-parts-container">
      {props.myParts.map((part) => (
        <div key={part._id} className="motorbike-part-card">
          <img src={part.image} alt={part.name} /> {/* Display image */}
          <h4>{part.name}</h4>
          <p>{part.description}</p>
          <div className="price">${part.price}</div>

          {/* Buttons for editing and deleting the part */}
          <div className="card-buttons">
            <Link to={`/edit/${part._id}`}>
              <button className="cta-btn edit-btn">Edit</button>
            </Link>
            <button className="cta-btn delete-btn" onClick={() => handleDelete(part._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MotorbikeParts;
