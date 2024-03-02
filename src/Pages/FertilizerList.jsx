import Header from "../components/Header/Header";
import CropCard from "../components/Card/CropCard";
import FertilizerCard from "../components/Card/FertilizerCard";
import { fertilizerData } from "../Data/Crop";


export default function FertilizerList() {
  return (
    <>
      <Header value={'signout'}/>

      <div className="container-fluid py-5">
        <div className="container py-5">
          <h1 className="mb-4">All Crops</h1>
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="row g-4 align-item-center justify-content-between">
                
                  <FertilizerCard value={fertilizerData}/>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
