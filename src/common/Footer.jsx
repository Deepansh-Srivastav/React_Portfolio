import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="d-flex justify-content-center align-items-start flex-wrap w-100 my-5 footer">

      <div className="">
        <div>
          <h4>Overview</h4>

          <p>Passionate MERN Stack Developer | Focused on building intuitive and responsive web solutions.</p>
        </div>

        <div>
          
        </div>

      </div>

      <div className="">
        <h4>Links</h4>

        <ul>
          <li>Projects</li>
          <li>Education</li>
          <li>Skills</li>
          <li>Experience</li>
        </ul>
      </div>

      <div className="">
        <h4>Contact</h4>

        <ul>
          <li>Phone</li>
          <li>Email</li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer