import { Card } from "react-bootstrap"

const SingleRadioEpisode = (props) => {
  return (
    <Card className="bg-transparent text-white border-0 radio-episode-card">
      <Card.Img src={props.image} className="rounded-3" alt={props.title} />
      <Card.Body className="px-0 pt-2">
        <Card.Text className="text-white small mb-1">{props.title}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SingleRadioEpisode
