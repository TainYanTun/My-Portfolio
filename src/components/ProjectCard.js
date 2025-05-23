import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, URL }) => {
  const handleClick = () => {
    if (URL) {
      window.open(URL, '_blank');
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div
        className="proj-imgbx"
        onClick={handleClick}
        style={{ cursor: URL ? 'pointer' : 'default' }}
      >
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}