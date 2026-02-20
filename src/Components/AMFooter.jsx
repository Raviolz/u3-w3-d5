import { Container, Row, Col } from "react-bootstrap"

const AMFooter = () => {
  return (
    <footer className="bg-dark border-top ">
      <Container fluid className="py-3 my-2">
        {/* Lingue */}
        <Row className="mb-2">
          <Col className="d-flex gap-3">
            <a href="#" className="text-white-50 text-decoration-none small">
              Italia
            </a>
            <a href="#" className="text-white-50 text-decoration-none small">
              English (UK)
            </a>
          </Col>
        </Row>

        {/*  Copyright */}
        <Row className="gy-2">
          <Col xs={12}>
            <span className="text-white-50 small">Copyright © 2024 Apple Inc. Tutti i diritti riservati.</span>
          </Col>
          {/* Link */}
          <Col xs={12} className="d-flex flex-wrap gap-3">
            <a href="#" className="text-white-50 text-decoration-none small">
              Condizioni dei servizi internet
            </a>
            <a href="#" className="text-white-50 text-decoration-none small">
              Apple Music e privacy
            </a>
            <a href="#" className="text-white-50 text-decoration-none small">
              Avviso sui cookie
            </a>
            <a href="#" className="text-white-50 text-decoration-none small">
              Supporto
            </a>
            <a href="#" className="text-white-50 text-decoration-none small">
              Feedback
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default AMFooter
