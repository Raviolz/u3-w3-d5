import { Container, Row, Col } from "react-bootstrap"
import SingleExploreLabel from "./SingleExploreLabel"

const SectionExplore = () => {
  const labels = [
    "Esplora per genere",
    "Worldwide",
    "Video musicali",
    "Decenni",
    "Classifiche",
    "Nuovi artisti",
    "Attività e stati d'animo",
    "Audio spaziale",
    "Hit del passato",
  ]

  return (
    <Container fluid className="mt-4">
      <h6 className="text-white mb-3">Altro da esplorare</h6>

      <Row className="g-3">
        {labels.map((label) => (
          <Col key={label} xs={12} md={6} lg={4}>
            <SingleExploreLabel label={label} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default SectionExplore
