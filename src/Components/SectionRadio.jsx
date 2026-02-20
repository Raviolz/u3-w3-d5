import { Col, Container, Row } from "react-bootstrap"
import SingleRadioEpisode from "./SingleRadioEpisode"

const SectionRadio = () => {
  const episodes = [
    {
      title: "Prologo con Abuelo",
      image: "/images/2a.png",
    },
    {
      title: "The Wanderer",
      image: "/images/2b.png",
    },
    {
      title: "Michael Bublé & Carly Pearce",
      image: "/images/2c.png",
    },
    {
      title: "Stephan Moccio & Zane Lowe",

      image: "/images/2e.png",
    },
    {
      title: "Chart Spotlight: Julia Michaels",
      image: "/images/2f.png",
    },
  ]

  return (
    <Container className="mt-4">
      <Row className="mb-2">
        <Col>
          <div className="d-flex align-items-center gap-2">
            <h6 className="text-white mb-0">Nuovi episodi radio</h6>
            <a href="#" className="text-white-50 text-decoration-none small">
              &gt;
            </a>
          </div>
        </Col>
      </Row>

      <Row className="g-3">
        {episodes.map((episode, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2}>
            <SingleRadioEpisode image={episode.image} title={episode.title} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default SectionRadio
