import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Motorbike Parts</Navbar.Brand> {/* Updated the brand name */}
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link> {/* Keeps the Home link */}
          <Nav.Link href="/create">Add Part</Nav.Link> {/* Updated Create link to Add Part */}
          <Nav.Link href="/read">View Parts</Nav.Link> {/* Updated Read link to View Parts */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
