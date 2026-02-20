import { Container, Row, Col, Navbar, Button, Form } from "react-bootstrap"

const AMNavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="py-2 border-bottom">
      <Container fluid>
        <Row className="w-100 align-items-center gx-3 flex-nowrap gap-3">
          {/*  Comandi player */}
          <Col md={3}>
            <div className="d-flex align-items-center gap-2">
              <Button variant="link" className="p-0 text-white-50 ">
                <i className="bi bi-shuffle" />
              </Button>

              <Button variant="link" className="p-0 text-white-50 ">
                <i class="bi bi-caret-left-fill"></i>
                <i class="bi bi-caret-left-fill"></i>
              </Button>

              <Button variant="link" className="p-0 text-white ">
                <i class="bi bi-caret-right-fill"></i>
              </Button>

              <Button variant="link" className="p-0 text-white-50 ">
                <i class="bi bi-caret-right-fill"></i>
                <i class="bi bi-caret-right-fill"></i>
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
              <i class="bi bi-person-fill"></i>
              Accedi
            </Button>
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}

export default AMNavBar
