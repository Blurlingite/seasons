import React from "react";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// specify default props that will be used if a certain field(s) coming in on the props object is not there (not even specified)
Spinner.defaultProps = {
  message: "Loading..."
};
export default Spinner;
