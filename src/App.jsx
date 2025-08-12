import Header from "./common/Header"
import RouterComponent from "./routes/RouterComponent"
import "./styles/App.css"
import "./styles/Theme.css"
import { useEffect } from "react"
import Aos from "aos"
import Footer from "./common/Footer"
import Sidenav from "./common/Sidenav"

const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  })
  return (
    <main className="position-absolute w-100">
      <Header />
      <Sidenav />
      <RouterComponent />
      <Footer />
    </main>
  )
}

export default App
