import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [uoercase, setUppercase] = useState("");
  const [len, setLen] = useState(0);
  const [lowercase, setLowercase] = useState("");
  const [reversed, setReversed] = useState("");

  const handleUpClick = () => {
    setUppercase(text.toUpperCase());
    props.showAlert("Converted to Uppercase!", "success");

    setLen(text.length);
    setLowercase(text.toLowerCase());
    setReversed(text.split("").reverse().join(""));
  };

  return (
    <>
      <div
        className="contanier my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>{props.heading}</h2>

        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            className="form-control"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
            id="myBox"
            rows={5}
          />
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
      </div>

      <div
        className="contanier my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h5>Uper Text : {uoercase}</h5>
        <h5>Text Lenght: {text.length}</h5>
        <h5>Lower Text : {lowercase}</h5>
        <h5>{text.length > 0 ? text : "revbhdscuhbdn"}</h5>
      </div>
    </>
  );
}
