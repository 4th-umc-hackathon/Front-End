import React from "react";
import chatblock from "../assets/rectangle.png";

const styles= {
    ic: {
        position: "relative",
        marginBottom: "100px"
    },
    to: {
        position: "absolute",
        top: "20%",
        left: "38%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#e4e4e4",
        paddingBottom: "30px",
        color: "#4E5560",
        fontSize: "30px",
        height: '10px'
    },
    text: {
        margin: 15,
        //paddingRight: '100px',
        width: '600px', 
        height: '40px'
    }

}
function ChatBlock(props) {
  return (
    <div style={styles.ic}>
      <img
        src={chatblock}
        alt={props.altText}
        style={{ width: "722px", height: "85px" }}
      />
      <div style={styles.to}>
        <p style={styles.text}>{props.text}</p>
      </div>
    </div>
  );
}

export default ChatBlock;
