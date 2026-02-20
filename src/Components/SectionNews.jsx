import { Container, Row, Col } from "react-bootstrap"
import SingleNews from "./SingleNews"

const SectionNews = () => {
  const news = [
    {
      title: "Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill",
      image: "/images/1a.png",
    },
    {
      title: "Ecco la nuova casa della musica latina",
      image: "/images/1b.png",
    },
  ]

  return (
    <Container fluid className="mb-5">
      <h2 className="text-white mb-4">Novità</h2>

      <Row className="g-4 flex-nowrap overflow-hidden">
        {news.map((newItem, index) => (
          <Col key={index} xs={10} sm={8} md={6}>
            <SingleNews title={newItem.title} subtitle={newItem.subtitle} image={newItem.image} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default SectionNews
