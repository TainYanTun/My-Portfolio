import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Thailand Sign in",
      description: "Interactive Login Page",
      imgUrl: projImg1,
      URL:"https://github.com/TainYanTun/Portfolio-Project/tree/main/Thailand%20Sign%20In"
    },
    {
      title: "My Portfolio",
      description: "Adobe Express Design",
      imgUrl: projImg2,
      URL:"https://new.express.adobe.com/webpage/c4CtNpewLHXTj"
    },
    {
      title: "Tic Tac Toe",
      description: "Html, css & js based game",
      imgUrl: projImg3,
      URL: "https://github.com/TainYanTun/Portfolio-Project/tree/main/Gamefile"
    },
    {
      title: "Simple Snake Game",
      description: "Python-based game",
      imgUrl: projImg4,
      URL: "https://github.com/TainYanTun/Portfolio-Project/blob/main/Snakegame.py"
    },
    {
      title: "Image Hover",
      description: "Photographic Hover effect",
      imgUrl: projImg5,
      URL:"https://github.com/TainYanTun/Portfolio-Project/tree/main/Cardhover"
    },
    {
      title: "Modern Sign In Form",
      description: "Transformative Login From",
      imgUrl: projImg6,
      URL:"https://github.com/TainYanTun/Portfolio-Project/tree/main/Loginform"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>The collection demonstrates the progressive mastery of web development fundamentals through practical implementations. Organized by technology stack and complexity..</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Though there is only 6 project in this section, there will be more later on in the future</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}