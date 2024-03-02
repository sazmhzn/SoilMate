import { Link } from "react-router-dom";
import Button from "../components/Button/Button";


export default function PageNotFound() {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container py-5 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-triangle display-1 text-secondary" />
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">Page Not Found</h1>
              <p className="mb-4">
                We’re sorry, the page you have looked for does not exist in our
                website! Maybe go to our home page or try to use a search?
              </p>
              <Link to="/">
                <Button link={"/"} value={"Go Back to Home "} />
           
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
