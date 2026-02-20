import { Card } from "react-bootstrap"

const SingleRelease = (props) => {
  return (
    <Card className="bg-transparent text-white border-0 h-100">
      {/* Cover */}
      <div className="release-cover rounded-3">
        <img src={props.image} alt={props.title} className="img-fluid rounded-3 w-100 h-100" />
      </div>

      {/* Text */}
      <Card.Body className="px-0 pt-2">
        <div className="small">{props.title}</div>
        <div className="small text-white-50">{props.artist}</div>
      </Card.Body>
    </Card>
  )
}

export default SingleRelease
