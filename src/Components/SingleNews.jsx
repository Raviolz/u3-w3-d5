import { Card } from "react-bootstrap"

const SingleNews = (props) => {
  return (
    <Card className="bg-dark text-white border-0 h-100">
      <Card.Body className="px-0">
        <div className="mb-2 text-white-50 small">NUOVA STAZIONE RADIO</div>

        <Card.Title className="fs-5">{props.title}</Card.Title>
        <Card.Text className="text-white-50 small">{props.subtitle}</Card.Text>
      </Card.Body>

      <Card.Img variant="bottom" src={props.image} className="rounded-3" />
    </Card>
  )
}

export default SingleNews
