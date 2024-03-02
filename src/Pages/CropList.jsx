import Header from "../components/Header/Header";
import CropCard from "../components/Card/CropCard";
import { cropData } from "../Data/Crop";

export default function CropList() {
  return (
    <>
      <Header value={'signout'}/>

      <div className="container-fluid py-5">
        <div className="container py-5">
          <h1 className="mb-4">All Crops</h1>
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="row g-4 align-item-center justify-content-between">
                  {/* <div className="rounded position-relative fruite-item">
                    <div className="fruite-img">
                      <img
                        src="img/fruite-item-5.jpg"
                        className="img-fluid w-100 rounded-top"
                        alt=""
                      />
                    </div>
                    <div
                      className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                      style={{ top: 10, left: 10 }}
                    >
                      Fruits
                    </div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                      <h4>Grapes</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">
                          $4.99 / kg
                        </p>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary" />{" "}
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div> */}
                  <CropCard value={cropData}/>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
