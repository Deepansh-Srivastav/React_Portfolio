import Header from "./common/Header"
import RouterComponent from "./routes/RouterComponent"
import "./styles/App.css"
import "./styles/Theme.css"
import { useEffect } from "react"
import Aos from "aos"
import Footer from "./common/Footer"
import Sidenav from "./common/Sidenav"
import useDeviceType from "./hooks/useDeviceType.js"

const App = () => {

  const { isMobile, isTablet, isLargeScreen } = useDeviceType();

  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  })
  return (
    <main className="position-absolute w-100">
      {isLargeScreen && <Header />}
      {(isMobile || isTablet) && <Sidenav />}
      <RouterComponent />
      <Footer />
    </main>
  )
}

export default App
