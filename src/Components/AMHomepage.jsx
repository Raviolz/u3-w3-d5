import SectionExplore from "./SectionExplore"
import SectionNews from "./SectionNews"
import SectionRadio from "./SectionRadio"
import SectionReleases from "./SectionReleases"

const AMHomepage = () => {
  return (
    <div className="my-5 mx-3 ">
      <SectionNews />
      <SectionRadio />
      <SectionReleases />
      <SectionExplore />
    </div>
  )
}

export default AMHomepage
