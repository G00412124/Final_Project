import { useEffect } from "react";
import Card from 'react-bootstrap/Card'; // Import the Card component
import { Link } from 'react-router-dom';  
import { Button } from 'react-bootstrap';
import axios from 'axios';




const MotorbikePartItem = (props) => { // Change this line to a function component

  const handleDelete = (e) => { // Add this function to handle the delete button click
    e.preventDefault(); 
    console.log('Delete clicked'); // Log a message to the console

    axios.delete('http://localhost:4000/api/motorbikeParts/' + props.myPart._id) // Send a DELETE request
      .then((res) => { console.log(res.data) }) // Log the response
      .catch(); // Catch any errors
  }

  useEffect(() => { // Add this effect to log the motorbike part item
    console.log("Motorbike Part Item:", props.myPart); // Log the motorbike part item
  }, [props.myPart]); // Add props.myPart to the dependency array

  return ( // Update the JSX to include the delete button
    <div className="motorbike-part-item">
      <Card className="motorbike-part-card">   
        <Card.Header className="motorbike-part-name">{props.myPart.name}</Card.Header> 
        <Card.Body> 
          <blockquote className="blockquote mb-0">
            <img src={props.myPart.image} alt={props.myPart.name} className="motorbike-part-image" />  
            <footer className="motorbike-part-description">{props.myPart.description}</footer>
            <footer className="motorbike-part-price">Price: £{props.myPart.price}</footer>
          </blockquote>
        </Card.Body>
        <div className="motorbike-part-actions">
          <Link to={"/edit/" + props.myPart._id} className="btn btn-primary motorbike-part-edit-btn">Edit</Link>
          <Button className="btn btn-danger motorbike-part-delete-btn" onClick={handleDelete}>Delete</Button> 
        </div> 
      </Card>
    </div>
  );
}

export default MotorbikePartItem; // Export the MotorbikePartItem component
