import React from "react";
import PropTypes from "prop-types";
import InputComponent from "./InputComponent";

const styles = {
  bt: {
    fontSize: "25px",
    fontWeight: "bold",
  },
  ubt: {
    fontSize: "15px",
    color: "grey",
  },
};

const Topic = ({ onClick, color, placeholder }) => {
  return (
    <button
      style={{
        backgroundColor: color,
        borderRadius: "40px",
        width: 1050,
        height: 80,
        border: "none",
        boxShadow: "0 1px 4px 1px rgba(0, 0, 0, 0.2)",
        marginBottom: "36px",
      }}
      className="button"
      onClick={onClick}
    >
      <div style={styles.bt}>
        <InputComponent placeholder={placeholder} />
      </div>
    </button>
  );
};

Topic.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
};

Topic.defaultProps = {
  color: "blue",
};

export default Topic;
