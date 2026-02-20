import { Row, Col } from "react-bootstrap"
import SingleRelease from "./SingleRelease"
import { useEffect, useState } from "react"

const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=new"

const SectionReleases = () => {
  const [releases, setReleases] = useState([])

  const fetchReleases = () => {
    fetch(URL)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Problema 400 o 500")
        }
      })
      .then((result) => {
        console.log("DATI", result.data)
        setReleases(result.data.slice(0, 10))
      })
      .catch((error) => {
        console.log("Errore recupero dati", error)
      })
  }

  useEffect(() => {
    fetchReleases()
  }, [])

  return (
    <section className="mt-4">
      <div className="d-flex align-items-center gap-2 mb-2">
        <h6 className="text-white mb-0">Nuove uscite</h6>
        <span className="text-white-50 small">&gt;</span>
      </div>

      <Row className="g-3 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
        {releases.map((release) => (
          <Col key={release.id}>
            <SingleRelease title={release.title} artist={release.artist.name} image={release.album.cover_medium} />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default SectionReleases
