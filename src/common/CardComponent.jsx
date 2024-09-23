import Card from 'react-bootstrap/Card';
import "../styles/Card.css"

export default function CardComponent({
  title,
  shortDescription,
  image,
  github,
  visit,
  route
}) {

  return (
    <Card style={{ width: '18rem' }} className='custom_card' data-aos="fade-down">
      <Card.Img variant="top"  src={image} />
      <Card.Body>
        <Card.Title className='my-3' style={{ color: '#bcf7f7', fontWeight:"bold" }}
        >{title}</Card.Title>
        <Card.Text>
          {shortDescription}
        </Card.Text>
      </Card.Body>

      <Card.Body>
        
        <p>Tech- </p>

      </Card.Body>

      <Card.Body className='d-flex justify-content-center align-items-center'>
        <a href={visit} target='blank' className='custom_button'>Visit</a>

        <a href={github} target='blank' className='custom_button'>Github</a>

        <a href='' target='blank' className='custom_button'>More</a>

      </Card.Body>
    </Card>
  );
}


function TechBadge(){
  return(
    <div className=''>

    </div>
  )
}