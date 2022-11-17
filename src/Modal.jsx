import React from "react";
import { useState } from "react";

function Modal(props) {
  const initialValues = {
    fName: "",
    lName: "",
    email: "",
  };
  const [inputs, setInputs] = useState(initialValues);

  const handleModelInputs = (e) => {
    if (e.target.name === "fName") {
      setInputs({
        fName: e.target.value,
        lName: inputs.lName,
        email: inputs.email,
      });
    } else if (e.target.name === "lName") {
      setInputs({
        fName: inputs.fName,
        lName: e.target.value,
        email: inputs.email,
      });
    } else {
      setInputs({
        fName: inputs.fName,
        lName: inputs.lName,
        email: e.target.value,
      });
    }
  };

  const handleModelSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(inputs);
    setInputs(initialValues);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <i
          className=" crossBtn fa-solid fa-square-xmark"
          onClick={() => props.closeModal(false)}
        ></i>
        <div className="modalContent">
          <div className="title">
            <h1 className="modalHeading">Create New User</h1>
          </div>
          {/* onSubmit={handleModelSubmit} */}
          <form>
            <div className="modalBody">
              <input
                className="modalInputs"
                type="text"
                name="fName"
                placeholder="Enter your first name"
                onChange={handleModelInputs}
                value={inputs.fName}
              />

              <input
                className="modalInputs"
                type="text"
                name="lName"
                placeholder="Enter your last name"
                onChange={handleModelInputs}
                value={inputs.lName}
              />

              <input
                className="modalInputs"
                type="email"
                name="email"
                placeholder="Enter your email adress"
                onChange={handleModelInputs}
                value={inputs.email}
              />
            </div>
            <div className="footerModal">
              <button
                className="closeBtn btn"
                onClick={() => props.closeModal(false)}
              >
                Close
              </button>
              <button
                type="submit"
                className="saveBtn btn"
                onClick={handleModelSubmit}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
