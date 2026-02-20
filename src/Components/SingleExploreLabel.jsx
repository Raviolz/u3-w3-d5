import { Button } from "react-bootstrap"

const SingleExploreLabel = (props) => {
  return (
    <Button
      variant="dark"
      className="w-100 d-flex align-items-center justify-content-between px-3 py-2 border-0 bg-secondary bg-opacity-10 btn-section-explore"
    >
      <span className="text-danger small">{props.label}</span>
      <i className="bi bi-chevron-right text-danger" />
    </Button>
  )
}

export default SingleExploreLabel
