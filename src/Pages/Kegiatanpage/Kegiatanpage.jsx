/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import reactLogo from "../../assets/react.svg";
import nodeLogo from "../../assets/nodejs.svg";
import expressLogo from "../../assets/express.svg";
import mongodbLogo from "../../assets/mongodb.svg";
import npmLogo from "../../assets/npm.svg";
import gitLogo from "../../assets/git.svg";
import githubLogo from "../../assets/github.svg";
import viteLogo from "/vite.svg";

import Card from "../../components/Card/Card";

import "./Kegiatanpage.css";

const Kegiatanpage = () => {
  const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  return (
    <div className="kegiatanpage w-100">
      <Container>
        <Row className="flex-column text-center gap-5">
          <Col>
            <h1 className="mt-2" id="top">
              Informasi Kegiatan
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis placeat porro, facilis nesciunt ullam blanditiis nemo
              inventore nobis obcaecati consequatur velit doloribus! Corporis
              officia facilis neque, accusamus, deleniti fugiat eaque dolores
              nemo atque dignissimos pariatur quia praesentium.
            </p>
          </Col>
          <Col>
            <marquee>
              <div className="icons d-flex gap-5">
                <img src={reactLogo} alt="logo" width={70} height={70} />
                <img src={viteLogo} alt="logo" width={70} height={70} />
                <img src={nodeLogo} alt="logo" width={70} height={70} />
                <img src={mongodbLogo} alt="logo" width={70} height={70} />
                <img src={npmLogo} alt="logo" width={70} height={70} />
                <img src={githubLogo} alt="logo" width={70} height={70} />
                <img src={expressLogo} alt="logo" width={70} height={70} />
                <img src={gitLogo} alt="logo" width={70} height={70} />
              </div>
            </marquee>
          </Col>
          <hr />
        </Row>
        <Row className="search-form sticky-top text-center">
          <Col className="col-2 d-flex justify-content-center">
            <a href="#top" className="btn btn-info">
              <i className="bi bi-chevron-double-up"></i>
            </a>
          </Col>
          <Col className="col-10">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Cari nama kegiatan"
                className="me-2 border-dark"
                aria-label="Search"
              />
              <Button variant="info">Search</Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-5 gap-2 gap-lg-3">
          {data.map((e, i) => {
            return <Card key={e.id} index={i} />;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Kegiatanpage;
