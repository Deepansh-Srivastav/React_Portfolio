import About from "../components/About"
import Hero from "../components/Hero"

const Home = () => {
  return (
    <main className="d-flex flex-column justify-content-center align-items-center w-100 main_page_layout">
        <Hero/>
        <About/>
    </main>
  )
}

export default Home
