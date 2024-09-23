import Card from 'react-bootstrap/Card';
import "../styles/Card.css"

export default function CardComponent({
  title,
  shortDescription,
  image,
  github,
  visit,
  route,
  tech
}) {

  return (
    <Card style={{ width: '18rem' }} className='custom_card' data-aos="fade-down">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className='my-3' style={{ color: '#bcf7f7', fontWeight: "bold" }}
        >{title}</Card.Title>
        <Card.Text>
          {shortDescription}
        </Card.Text>
      </Card.Body>

      <Card.Body className='d-flex justify-content-start align-items-center w-100'>

        <p style={{ margin: " 0 10px 0 0" }}>Tech- </p>

        <TechBadges tech={tech} />

      </Card.Body>

      <Card.Body className='d-flex justify-content-center align-items-center'>
        <a href={visit} target='blank' className='custom_button'>Visit</a>

        <a href={github} target='blank' className='custom_button'>Github</a>

        <a href='' target='blank' className='custom_button'>More</a>

      </Card.Body>
    </Card>
  );
}


function TechBadges({ tech }) {
  return (
    <div className="d-flex justify-content-start align-items-center flex-row w-100">

      {tech.map((technology) => {
        return (
          <div style={{ maxWidth: "28px", marginRight:"10px" }} key={technology}>
            <img src={technology} alt="Image" className='w-100' />
          </div>
        )
      })}

    </div>
  )
}