import axios from "axios"; // Import axios
import { useState } from "react"; // Import the useState hook from React
import './Create.css';

const Create = () => {

    const [name, setName] = useState(''); // Create a name state variable for the part
    const [description, setDescription] = useState(''); // Create a description state variable for the part
    const [price, setPrice] = useState(''); // Create a price state variable for the part
    const [image, setImage] = useState(''); // Create an image state variable for the part

    const handleSubmit = (e) => { // Create a function called handleSubmit that takes an event as an argument
        e.preventDefault(); // Prevent the default form submission behavior
        const motorbikePart = {name, description, price, image}; // Create a motorbike part object with the name, description, price, and image
        console.log(motorbikePart);     

        axios.post('http://localhost:4000/api/motorbikeParts', motorbikePart) // Make a post request to the motorbike parts endpoint with the motorbike part object
        .then((res) => {console.log(res.data)}) // Log the response data to the console
        .catch((error) => {console.error(error)}); // Log any errors to the console
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
