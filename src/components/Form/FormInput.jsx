

function FormInput(props) {
    const {label, onChange, inputName, id, ...other} = props

  return (
    <div className="mb-4">
      <label
        htmlFor="formGroupExampleInput"
        className="form-label lead fw-bold"
      >
        {label}
      </label>
      {/* <input
        type="text"
        className="form-control lead p-3"
        id="formGroupExampleInput"
        placeholder={props.placeholder}
        name="nitrogen"
        onChange={e => props.setNitrogen(e.target.value)}
      /> */}
      <input 
        className="form-control lead p-3"
        id="formGroupExampleInput" 
        {...other} 
        onChange={onChange} />
    </div>
  );
}

export default FormInput;