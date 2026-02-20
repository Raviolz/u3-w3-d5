import { Container, Row, Col, Navbar, Button, Form, Nav, NavDropdown } from "react-bootstrap"

const AMNavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="py-2 border-bottom d-none d-lg-flex">
        <Container fluid>
          <Row className="w-100 align-items-center gx-3 flex-nowrap gap-3">
            {/*  Comandi player */}
            <Col md={3} className="d-none d-md-flex">
              <div className="d-flex align-items-center gap-2">
                <Button variant="link" className="p-0 text-white-50 ">
                  <i className="bi bi-shuffle" />
                </Button>

                <Button variant="link" className="p-0 text-white-50 ">
                  <i className="bi bi-caret-left-fill"></i>
                  <i className="bi bi-caret-left-fill"></i>
                </Button>

                <Button variant="link" className="p-0 text-white ">
                  <i className="bi bi-caret-right-fill"></i>
                </Button>

                <Button variant="link" className="p-0 text-white-50 ">
                  <i className="bi bi-caret-right-fill"></i>
                  <i className="bi bi-caret-right-fill"></i>
                </Button>

                <Button variant="link" className="p-0 text-white-50 ">
                  <i className="bi bi-repeat" />
                </Button>
              </div>
            </Col>
            {/*  Centro */}
            <Col md={6}>
              {" "}
              <div className="mx-3 flex-grow-1 bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center AMNcenter-box">
                <img src="/logos/apple.svg" alt="Apple" className="opacity-75" id="AMNlogo" />
              </div>
            </Col>
            {/*  Volume e Bottone */}
            <Col md={3} xs="auto" className="d-flex align-items-center gap-3 ms-auto">
              <div className="d-none d-sm-flex align-items-center gap-2">
                <i className="bi bi-volume-up text-white-50" />
                <Form.Range aria-label="Volume" />
              </div>

              <Button variant="danger" size="sm" className="px-3 d-flex gap-2">
                <i className="bi bi-person-fill"></i>
                Accedi
              </Button>
              <Button variant="link" className="text-white d-md-none">
                <i className="bi bi-list fs-4"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </Navbar>
      {/* mobile */}
      <Navbar bg="dark" variant="dark" className="py-2 border-bottom d-flex d-lg-none">
        <Container fluid className="d-flex align-items-center justify-content-between">
          {/* SINISTRA */}
          <Nav>
            <NavDropdown title={<i className="bi bi-list fs-4 text-white"></i>} id="mobile-nav-dropdown" align="start" menuVariant="dark">
              <NavDropdown.Item href="#">
                <i className="bi bi-house-door-fill text-danger me-2"></i>
                Home
              </NavDropdown.Item>

              <NavDropdown.Item href="#">
                <i className="bi bi-grid-fill text-danger me-2"></i>
                Novità
              </NavDropdown.Item>

              <NavDropdown.Item href="#">
                <i className="bi bi-broadcast text-danger me-2"></i>
                Radio
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* CENTRO */}
          <div className="text-white fw-semibold">
            <img src="/logos/apple.svg" alt="Apple" height={16} className="me-1" />
            <img src="/logos/music.svg" alt="Apple" height={16} className="me-1" />
          </div>

          {/* DESTRA */}
          <Button variant="link" className="text-danger">
            Accedi
          </Button>
        </Container>
      </Navbar>
    </>
  )
}

export default AMNavBar
