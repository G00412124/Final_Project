import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content'; // Import the Content component
import Read from './components/read'; // Import the Read component for viewing motorbike parts
import Create from './components/create'; // Import the Create component for adding motorbike parts
import Edit from './components/edit'; // Import the Edit component for editing motorbike parts

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/read" element={<Read />} /> {/* View motorbike parts */}
        <Route path="/create" element={<Create />} /> {/* Add new motorbike part */}
        <Route path="/edit/:id" element={<Edit />} /> {/* Edit existing motorbike part */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
