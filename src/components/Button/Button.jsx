import { Link } from "react-router-dom";

export default function Button(props) {
    return(
        <button className="btn rounded-5 ml-4">
            <Link to={props.link}>{props.value}</Link>
          </button>
    );
}