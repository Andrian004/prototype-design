import { Container, Row, Col } from "react-bootstrap";

import reactLogo from "../../assets/react.svg";
import nodeLogo from "../../assets/nodejs.svg";
import expressLogo from "../../assets/express.svg";
import mongodbLogo from "../../assets/mongodb.svg";
import npmLogo from "../../assets/npm.svg";
import gitLogo from "../../assets/git.svg";
import githubLogo from "../../assets/github.svg";
import viteLogo from "/vite.svg";
import Parallax from "../../components/Parallax/Parallax";

import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <Parallax />
      <Container className="text-center pt-5">
        <Row>
          <Col>
            <img src={reactLogo} alt="logo" width={120} height={120} />
            <h1>Restoe Boemi</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores, ut aut obcaecati omnis consequatur, inventore eaque,
              incidunt veniam atque dignissimos veritatis expedita minus quaerat
              fugit sit? Beatae et perspiciatis voluptas. Ipsam modi asperiores
              autem, iste repellat cumque illum nam possimus ut. Temporibus
              pariatur dignissimos recusandae molestiae alias voluptates, quis
              voluptas eveniet hic rem adipisci praesentium error harum quae
              beatae labore.
            </p>
            <hr />
          </Col>
        </Row>
        <Row className="min-vh-100 flex-column">
          <Col className="pt-5">
            <h1 className="mt-2">Fisi & Misi Kami</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
              odio!
            </p>
          </Col>
          <Col className="d-flex justify-content-center align-items-center position-relative">
            <div className="list-wrapper-left card-list text-start w-75 ms-auto me-0">
              <h3>Title 1</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur sunt, alias labore accusantium consectetur amet
                excepturi quas assumenda odit dolorum!
              </p>
            </div>
          </Col>
          <Col className="d-flex justify-content-center align-items-center position-relative">
            <div className="list-wrapper-right card-list text-start w-75 ms-0 me-auto">
              <h3>Title 2</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur sunt, alias labore accusantium consectetur amet
                excepturi quas assumenda odit dolorum!
              </p>
            </div>
          </Col>
          <Col className="d-flex justify-content-center align-items-center position-relative">
            <div className="list-wrapper-left card-list text-start w-75 ms-auto me-0">
              <h3>Title 3</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur sunt, alias labore accusantium consectetur amet
                excepturi quas assumenda odit dolorum!
              </p>
            </div>
          </Col>
          <hr />
        </Row>
        <div className="info-kegiatan min-vh-100">
          <div className="title pt-5">
            <h1 className="mt-2">Info Kegiatan</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              blanditiis?
            </p>
          </div>
          <Row className="mt-5">
            <Col lg={8}>
              <Row className="flex-column mt-3">
                <Col className="text-start mt-2">
                  <h4>Kegiatan Title 1</h4>
                  <p className="text-secondary">17 Agustus 2023</p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Possimus soluta dolorem rerum totam atque, repudiandae
                    vitae? Architecto voluptatum error, quis eveniet blanditiis
                    exercitationem ut praesentium fugiat nobis maiores minus
                    inventore reprehenderit recusandae dolorem voluptatem aut
                    iusto ipsa ab illum vitae cumque earum. Qui culpa
                    consectetur itaque, accusamus fugiat molestias recusandae.
                  </p>
                  <hr />
                </Col>
                <Col className="text-start mt-2">
                  <h4>Kegiatan Title 2</h4>
                  <p className="text-secondary">17 Agustus 2023</p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Possimus soluta dolorem rerum totam atque, repudiandae
                    vitae? Architecto voluptatum error, quis eveniet blanditiis
                    exercitationem ut praesentium fugiat nobis maiores minus
                    inventore reprehenderit recusandae dolorem voluptatem aut
                    iusto ipsa ab illum vitae cumque earum. Qui culpa
                    consectetur itaque, accusamus fugiat molestias recusandae.
                  </p>
                  <hr />
                </Col>
                <Col className="text-start mt-2">
                  <h4>Kegiatan Title 3</h4>
                  <p className="text-secondary">17 Agustus 2023</p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Possimus soluta dolorem rerum totam atque, repudiandae
                    vitae? Architecto voluptatum error, quis eveniet blanditiis
                    exercitationem ut praesentium fugiat nobis maiores minus
                    inventore reprehenderit recusandae dolorem voluptatem aut
                    iusto ipsa ab illum vitae cumque earum. Qui culpa
                    consectetur itaque, accusamus fugiat molestias recusandae.
                  </p>
                  <hr />
                </Col>
                <Col className="px-3">
                  <a href="/kegiatan" className="btn btn-info w-100">
                    Lihat lebih banyak
                  </a>
                </Col>
              </Row>
            </Col>
            <Col lg={4}>
              <div className="sponsor-wrapper mt-3 mb-3">
                <h4 className="mt-2">Sponsor Aktif</h4>
                <hr />
                <div className="d-flex flex-wrap justify-content-center">
                  <img
                    src={reactLogo}
                    alt="logo"
                    width={70}
                    height={70}
                    className="m-3"
                  />
                  <img
                    src={viteLogo}
                    alt="logo"
                    width={70}
                    height={70}
                    className="m-3"
                  />
                  <img
                    src={nodeLogo}
                    alt="logo"
                    width={70}
                    height={70}
                    className="m-3"
                  />
                  <img
                    src={expressLogo}
                    alt="logo"
                    width={70}
                    height={70}
                    className="m-3"
                  />
                  <img
                    src={mongodbLogo}
                    alt="logo"
                    width={70}
                    height={70}
                    className="m-3"
                  />
                  <img
                    src={npmLogo}
                    alt="logo"
                    width={70}
                    height={70}
                    className="m-3"
                  />
                  <img
                    src={gitLogo}
                    alt="logo"
                    width={70}
                    height={70}
                    className="m-3"
                  />
                  <img
                    src={githubLogo}
                    alt="logo"
                    width={70}
                    height={70}
                    className="m-3"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Homepage;
