import React from "react";
import PropTypes from 'prop-types';

function DefaultPropsChild({ name }) {

   return (
      <div>
         <h2>Child with Default Props </h2>
         <h3>{name}</h3>
      </div>
   );
}

export default DefaultPropsChild;

DefaultPropsChild.defaultProps = {
   name: "Default Name",
   job: "Default Prop Job",
   age: "Default Number",
   isEligible: "Default bool",
}

DefaultPropsChild.propTypes = {
   name: PropTypes.string.isRequired,
   job: PropTypes.string.isRequired,
}

//https://legacy.reactjs.org/docs/typechecking-with-proptypes.html#proptypes



