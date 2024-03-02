import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "./FormInput";

function NPKForm(props) {
  // const [phosphorus, setPhosphorus]  = useState("");
  // const [potassium, setPotassium]  = useState("");
  // const [nitrogen, setNitrogen]  = useState("");
  const {tested, setTested} = props;

  console.log(props, "Thisis in NPK form");

  const navigate = useNavigate();

  const [values, setValues] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
  });

  const inputs = [
    {
      id: 1,
      name: "nitrogen",
      type: "text",
      placeholder: "Nitrogen level",
      label: "Nitrogen level",
    },
    {
      id: 2,
      name: "phosphorus",
      type: "text",
      placeholder: "Phosphorus Level",
      label: "Phosphorus Level",
    },
    {
      id: 3,
      name: "potassium",
      type: "text",
      placeholder: "Potassium Level",
      label: "Potassium Level",
    },
  ];

  function handleClick() {
    // setTested(true);
    setTested(p => !p);
    // navigate("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //values ma sabai npk data basxa
  // console.log(values);

  return (
    <form action="" method="POST">
      <h1 className="mb-5">Test your Soil Now</h1>

      {/* <FormInput label={"Nitrogen Level"} placeholder={"Nitrogen level"} setNitrogen={setNitrogen} />
      <FormInput label={"Phosphorus Level"} placeholder={"phosphorus level"} setPhosphorus={setPhosphorus} />
      <FormInput label={"Potassium Level"} placeholder={"Potassium level"} setPotassium={setPotassium} /> */}

      {inputs.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
        />
      ))}
      {/* <Link to="/section"> */}
       
        <button
          className="btn btn-success mt-4 px-4 py-3 fw-bold fs-5"
          onClick={handleClick}
        >
          {tested ? "Retest it": "Take test"}
        </button>
      {/* </Link> */}
    </form>
  );
}

export default NPKForm;
