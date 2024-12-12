import MotorbikePartItem from './MotorbikePartItem';

const MotorbikeParts = (props) => { // Define a functional component called MotorbikeParts that takes a prop called myParts
    return props.myParts.map( // Map over the myParts prop
        (part) => { // For each motorbike part in the myParts prop
            return <MotorbikePartItem myPart={part} key={part._id} /> // Pass the part object as a prop to the MotorbikePartItem component
        }
    );
}

export default MotorbikeParts; // Export the MotorbikeParts component
