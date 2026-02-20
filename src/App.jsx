import "./App.css"
import AMFooter from "./Components/AMFooter.jsx"
import AMNavBar from "./Components/AMNavBar.jsx"
import AMSideBar from "./Components/AMSideBar.jsx"
import AMHomepage from "./Components/AMHomepage.jsx"

function App() {
  return (
    <>
      <div className="am-layout">
        <AMSideBar />
        <div className="min-vh-100 d-flex flex-column am-main">
          <AMNavBar />
          <div className="am-page">
            <AMHomepage />
          </div>
          <AMFooter />
        </div>
      </div>
    </>
  )
}

export default App
