import React from "react";
import PropTypes from "prop-types";
import "../styles/CategoryButton.css";
import { useNavigate } from 'react-router-dom'

const styles = {
  bt: {
    width: "300px",
    height: "34px",
    fontSize: "28px",
    fontWeight: "bold",
    display: "flex",
    lineHeight: "34px",
    marginBottom: "9px",
    wordBreak: "keep-all",
    textAlign: "left",
  },
  ubt: {
    fontSize: "18px",
    display: "flex",
    color: "#474747",
    width: "100px",
    height: "66px",
    textAlign: "left",
    wordBreak: "keep-all",
  },
  img_cage: {
    width: 156,
    height: 118,
    marginLeft: "38px",
  },
};




const CategoriBtn = ({ text, underText, imgSrc, onClick, color }) => {
  const navigate = useNavigate();
  
  function handleClick() {
    navigate('/chatroom');
  };

  return (
    <button
      style={{
        backgroundColor: color,
        borderRadius: "40px",
        width: "369px",
        height: "219px",
        border: "none",
        boxShadow: "0 1px 4px 1px rgba(0, 0, 0, 0.2)",
        paddingLeft: "42px",
        paddingTop: "34px",
        letterSpacing: "-1px",
      }}
      className="button"
      onClick={handleClick}
    >
      <div style={styles.bt}>{text}</div>
      <div style={{ display: "flex" }}>
        <div style={styles.ubt}>{underText}</div>

        <div style={styles.img_cage}>
          <img src={imgSrc} style={{ width: "145px", height: "110px" }} alt=""/>
        </div>
      </div>
    </button>
  );
};

CategoriBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
};

CategoriBtn.defaultProps = {
  color: "blue",
};

export default CategoriBtn;
