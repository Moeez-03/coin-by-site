import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About Me</h2>
                <p>A tokenization solution offered by Brick Token, S.L., an entity with its registered office in Llacuna Street #162, 308 (Barcelona), 08018. Brick Token, S.L. is a limited company registered in the Mercantile Registry of Barcelona, Spain, with Spanish VAT number B67557603.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Our Mission</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Our Vision</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Our Values</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>Shiba aims to enable asset owners worldwide to embrace a decentralized fundraising approach by leveraging blockchain technology, offering individuals the opportunity to generate passive income. Our goal is to equip companies with the necessary tools to tokenize assets on a global scale, and enter the token economy.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>We aim to standardize the process by which asset tokenization and tokenization services across the globe are executed and facilitate tokenization through Brickken’s decentralized application (dApp). We believe in a decentralized and tokenized world.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Our services provide reporting and auditing tools while ensuring the protection of information and ownership privacy.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
