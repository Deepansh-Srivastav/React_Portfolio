import Header from "./common/Header"
import RouterComponent from "./routes/RouterComponent"
import "./styles/App.css"
import { useEffect } from "react"
import Aos from "aos"
import Footer from "./common/Footer"

const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  })
  return (<>
    <Header />
    <RouterComponent />
    {/* <Footer/> */}
  </>
  )
}

export default App
