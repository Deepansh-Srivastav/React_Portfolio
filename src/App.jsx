import Header from "./common/Header"
import RouterComponent from "./routes/RouterComponent"
import "./styles/App.css"
import { useEffect } from "react"
import Aos from "aos"

const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  })

  return (<>
    <Header />
    <RouterComponent />
  </>
  )
}

export default App
