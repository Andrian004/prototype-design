/* eslint-disable react/prop-types */
const Card = ({ index }) => {
  return (
    <div className="w-100 bg-body-tertiary shadow border rounded p-2">
      <div className="bg-info p-1 d-flex flex-wrap justify-content-between align-items-center rounded">
        <h4 className="mb-0">Kegiatan {index + 1}</h4>
        <p className="mb-0">Tgl: 17 Agustus 2023</p>
      </div>
      <p className="mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi veniam
        vero aperiam accusantium quam culpa atque exercitationem. Fugit
        accusamus nulla necessitatibus laboriosam ipsam reprehenderit expedita
        similique reiciendis suscipit labore alias velit ab quae minima
        repudiandae, deserunt, veritatis cupiditate eius dicta. Facere veniam
        sapiente assumenda omnis quibusdam minus itaque voluptatibus saepe.
      </p>
    </div>
  );
};

export default Card;
