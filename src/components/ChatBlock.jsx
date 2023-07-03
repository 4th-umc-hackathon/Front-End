import React from 'react';
import chatblock from "../assets/chatblock.png";

const styles= {
    ic: {
        position: "relative",
    },
    to: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#DCE4F5",
        padding: "10px",
        color: "#4E5560",
        fontSize: "30px",
    },
    text: {
        margin: 0,
    }

}
function ChatBlock(props) {

  return (
    <div style={styles.ic}>
      <img src={chatblock} alt={props.altText} />
      <div style={styles.to}>
        <p style={styles.text}>{props.text}</p>
      </div>
    </div>
  );
}

export default ChatBlock;
