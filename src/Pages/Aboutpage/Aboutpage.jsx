import { Container } from "react-bootstrap";

import comunityImg from "../../assets/comunity-img.jpg";

import "./Aboutpage.css";

const Aboutpage = () => {
  return (
    <div className="aboutpage d-flex flex-column justify-content-center">
      <Container>
        <h5 className="mt-2 mt-lg-5">
          JULY 5, 2023 /{" "}
          <a href="" className="text-decoration-none">
            #restoeboemi
          </a>
        </h5>
        <h1 className="mt-3">About Restoe Boemi</h1>
        <img
          src={comunityImg}
          alt="my comunity"
          className="comunity-img w-100 my-4 my-lg-5"
        />
        <div className="container-faq col-12 col-lg-9 mb-5">
          <h3 className="mt-4">Apa itu Restoe Boemi?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            ratione eaque maxime, ea tenetur, harum adipisci debitis corporis
            alias cupiditate voluptatem! Magnam quod saepe aliquam dolor?
            Voluptates aperiam, alias quasi eos cumque perspiciatis eveniet ipsa
            voluptas. Quibusdam, blanditiis. Porro ipsa laboriosam incidunt
            omnis consectetur facere impedit quos, alias vel fuga voluptatibus
            et saepe? Voluptates officia cum ipsum doloribus, laborum voluptate?
          </p>

          <h3 className="mt-4">Kapan Restoe Boemi dibuat?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            sequi. Corporis, consequuntur neque quas laboriosam perspiciatis
            magni sed doloremque!
          </p>

          <h3 className="mt-4">Apa tujuan Restoe Boemi dibuat?</h3>
          <p>Kami mempunyai beberapa tujuan yaitu:</p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam incidunt provident ipsa. Quae atque autem facilis
              perspiciatis consequatur possimus ut?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              distinctio sit nemo architecto provident voluptatibus!
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
              accusamus ad voluptatibus a enim praesentium eum culpa nulla sequi
              mollitia neque magnam quasi tenetur distinctio soluta placeat
              sapiente aliquid architecto exercitationem perferendis! Porro,
              ipsam.
            </li>
          </ul>

          <h3 className="mt-4">Bagaimana cara untuk menjadi sponsor?</h3>
          <p>
            Untuk menjadi seorang sponsor kamu bisa menghubungi kami melalui
            media berikut:
          </p>
          <a href="#">
            <i className="bi bi-envelope me-2"></i>
            andriadi6@gmail.com
          </a>
          <br />
          <a href="#">
            <i className="bi bi-whatsapp me-2"></i>
            +6285556789990
          </a>
        </div>
        <div>
          <hr />
          <p className="mt-2">
            Dukung kami dengan cara subscribe channel youtube kami.
          </p>
          <a
            href="https://www.youtube.com/@AMIKPYT/featured"
            className="btn btn-danger"
          >
            Subscribe
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Aboutpage;
