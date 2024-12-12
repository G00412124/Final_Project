import MotorbikeParts from "./MotorbikeParts"; // Import the MotorbikeParts component
import { useEffect, useState } from "react"; // Import the useEffect and useState hooks from React
import axios from "axios"; // Import axios
import './Read.css'; 


const Read = () => {

  const [motorbikeParts, setMotorbikeParts] = useState([]); // Create a motorbikeParts state variable

  useEffect(() => { // Use an effect hook to make a GET request to the motorbike parts endpoint
    
    axios.get('http://localhost:4000/api/motorbikeParts') // Make a GET request to the motorbike parts endpoint
      .then((response) => {
        console.log(response.data);   
        setMotorbikeParts(response.data.parts); // Set the motorbikeParts state to the parts array from the response
      })
      .catch((error) => { // Log any errors to the console
        console.log(error); 
      });
  }, []); // Add an empty dependency array to ensure the effect runs only once when the component mounts

  return (
    <div>
      <h3>Motorbike Parts List</h3>   
      <MotorbikeParts myParts={motorbikeParts} /> 
    </div>
  );
}

export default Read; // Export the Read component
