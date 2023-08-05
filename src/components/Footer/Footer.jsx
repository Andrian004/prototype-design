import { Container, Row, Col } from "react-bootstrap";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer w-100 text-center pt-2 pb-1">
      <Container>
        <Row className="text-start">
          <Col md={6}>
            <h3>Restoe Boemi</h3>
            <p>
              Restoe Boemi adalah organisasi lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quo minus saepe quidem amet
              provident quas praesentium odit. Error, maiores voluptas, labore
              vitae cumque distinctio animi culpa quo illum magni aperiam
              nostrum quibusdam nihil ipsa quos placeat amet impedit. Qui
              laudantium in deserunt!
            </p>
            <h6>Contact Us:</h6>
            <div className="contacts d-flex flex-column gap-2">
              <a href="#">
                <i className="bi bi-envelope me-2" />
                andriadi6@gmail.com
              </a>
              <a href="#">
                <i className="bi bi-whatsapp me-2" />
                +6285556789990
              </a>
            </div>
          </Col>
          <Col md={3} className="mt-4 mt-md-0">
            <h4>Links</h4>
            <div className="links d-flex flex-column gap-2">
              <a href="/">Home</a>
              <a href="/kegiatan">Kegiatan</a>
              <a href="/about">About</a>
              <a href="/login">Admin</a>
            </div>
          </Col>
          <Col md={3} className="mt-4 mt-md-0">
            <h4>Social Media</h4>
            <div className="socmed d-flex flex-column gap-2">
              <a href="#">
                <i className="bi bi-youtube me-2" />
                youtube-channel
              </a>
              <a href="#">
                <i className="bi bi-instagram me-2" />
                ig-name
              </a>
              <a href="#">
                <i className="bi bi-tiktok me-2" />
                tiktok-name
              </a>
              <a href="#">
                <i className="bi bi-twitter me-2" />
                twitter-name
              </a>
            </div>
          </Col>
        </Row>
        <p className="mt-5">&copy; 2023 Restoe Boemi. All rights reserved.</p>
      </Container>
    </div>
  );
};

export default Footer;
