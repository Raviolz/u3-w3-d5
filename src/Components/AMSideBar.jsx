import { Navbar, Container, Form, InputGroup, Nav } from "react-bootstrap"

const AMSideBar = () => {
  return (
    <aside className="am-sidebar bg-dark text-white border-end d-none d-lg-block">
      <Container fluid className="py-3 ">
        {/* Brand */}
        <Navbar.Brand className="d-flex align-items-center gap-2 mb-3 text-white">
          <img src="/logos/music.svg" alt="Apple Music" />
        </Navbar.Brand>

        {/* Search */}
        <InputGroup className="mb-3">
          <InputGroup.Text className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 text-danger">
            <i className="bi bi-search" />
          </InputGroup.Text>
          <Form.Control placeholder="Cerca" className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 text-white" />
        </InputGroup>

        {/* Nav */}
        <Nav className="flex-column gap-1">
          <Nav.Link href="#" className="text-white-50 d-flex align-items-center gap-2 ">
            <i className="bi bi-house-door-fill text-danger" />
            <span className="text-white">Home</span>
          </Nav.Link>

          <Nav.Link href="#" className="d-flex align-items-center gap-2">
            <i className="bi bi-grid-fill text-danger" />
            <span className="text-white fw-semibold">Novità</span>
          </Nav.Link>

          <Nav.Link href="#" className="text-white-50 d-flex align-items-center gap-2 ">
            <i className="bi bi-broadcast text-danger" />
            <span className="text-white">Radio</span>
          </Nav.Link>
        </Nav>
      </Container>
    </aside>
  )
}

export default AMSideBar
