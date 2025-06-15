const Heading_Type_2 = ({ heading, subHeading }) => {
  return (
    <div className="heading_type_2" data-aos="fade-down">
      <h3>{heading}</h3>
      <span style={{ color: "white" }}>{subHeading}</span>
    </div>
  )
}

export default Heading_Type_2;