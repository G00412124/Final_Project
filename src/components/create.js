import axios from "axios"; // Import axios
import { useState } from "react"; // Import the useState hook from React
import './Create.css';

const Create = () => {

    // Create state variables for the name, description, price, and image
    const [name, setName] = useState(''); 
    const [description, setDescription] = useState(''); 
    const [price, setPrice] = useState(''); 
    const [image, setImage] = useState(''); 


    // Create a function to handle the form submission
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        const motorbikePart = {name, description, price, image}; 
        console.log(motorbikePart);     


        // Send a POST request to the server
        axios.post('http://localhost:4000/api/motorbikeParts', motorbikePart) 
        .then((res) => {console.log(res.data)}) 
        .catch((error) => {console.error(error)}); 
    }

    return ( // Return a form with input fields for the name, description, price, and image
        <div>
            <h3>Add New Motorbike Part</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Part Name: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                        className="form-control"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Price: </label>
                    <input type="number"
                        className="form-control"
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Image URL: </label>
                    <input type="text"
                        className="form-control"
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Motorbike Part" /> 
                </div>
            </form>
        </div>
    );
}
export default Create; // Export the Create component
