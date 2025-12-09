import React from "react";

function alert(props) {
  const cplition = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {props.alert.type}: {props.alert.msg}
        </div>
      </div>
    )
  );
}

export default alert;
