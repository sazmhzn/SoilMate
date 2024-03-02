import Header from "../components/Header/Header";
import potato from "../images/2.jpg";
import "../css/style.css";
import farm from "../images/farmland.jpg";
import CropCard from "../components/Card/CropCard";

function Land() {
  return (
    <>
      <Header value={"signout"} />
      <div className="container-fluid py-5 mt-5">
        <div className="container py-5">
          <div className="row g-4 mb-5">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="border rounded">
                  <a href="#">
                    <img src={farm} className="img-fluid rounded" alt="Image" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <h4 className="fw-bold mb-1">Sikali Lalitpur</h4>
                <p className="mb-3">Owner: Rabindra</p>

                <p className="mb-3">
                  The generated Lorem Ipsum is therefore always free from
                  repetition injected humour, or non-characteristic words etc.
                </p>
                <p className="mb-3">
                  Susp endisse ultricies nisi vel quam suscipit. Sabertooth
                  peacock flounder; chain pickerel hatchetfish, pencilfish
                  snailfish
                </p>
                <div className="input-group quantity mb-5">
                  <table
                    className="table"
                    style={{
                      width: "100%",
                      padding: "10px",
                    }}
                  >
                    <thead className="thead-dark">
                      <tr className="">
                        <th scope="col-2">N</th>
                        <th scope="col">P</th>
                        <th scope="col">K</th>
                        <th scope="col">pH</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>4</td>
                        <td>2</td>
                        <td>1</td>
                        <td>6.3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-lg-12">
                <div
                  className="container"
                  style={{
                    minHeight: "100vh",
                    display: "grid",
                    placeContent: "center",
                  }}
                >
                  <h1>Recommended Crops</h1>
                  <p className="text-center mb-4">These crops are recommended to plant in this current season</p>
                  <div className="row card-container">
               

                    <CropCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Land;
