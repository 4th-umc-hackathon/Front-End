import React, { useEffect, useState } from "react";
import logoImage from "../assets/logo.png";
import "../styles/ChattingResultPags.css";
import { Link } from "react-router-dom";
import xIcon from "../assets/xIcon.png";
import checkIcon from "../assets/checkIcon.png";
import sendIcon from "../assets/sendicon.png";
const styles = {
  chatBar: {
    width: "100%",
    display: "flex",
    bottom: 0,
    position: "absolute",
    justifyContent: "center",
    marginBottom: "20px",
  },
  in: {
    width: 1200,
    height: 70,
    borderRadius: "20px",
    fontSize: "30px",
    paddingLeft: "40px",
    border: "none",
    boxShadow: "0 1px 4px 1px rgba(0, 0, 0, 0.2)",
  },
}


function ChattingResultPage() {
  return (
    <>
      <Link to="/">
        <img src={logoImage} alt="" className="logoimage" />
      </Link>
      <div className="chatWrap" style={{marginTop: "60px"}}>
        <div className="wrap" style={{marginBottom: "83px"}}>
          <img
            src={checkIcon}
            alt=""
            width="61px"
            height="49px"
            style={{
              marginTop: "20px",
              marginRight: "20px"
            }}
          ></img>
          <div className="oChat" style={{fontSize: "28px", color: "#4e5560", textAlign: "center", lineHeight: "84px"}}>
            I think he is so kind and he really cares about me.</div>
        </div>
        <div style={{width: "631px", height: "32px", fontSize: "28px", marginLeft: "1163px", color: "#730000"}}>이렇게 표현하면 더 좋아요</div>
        <div className="wrap">
          <img src={xIcon} alt="" width="52px" height="52px" style={{
              marginTop: "20px",
              marginRight: "20px"
            }}></img>
          <div className="xChat" style={{fontSize: "28px", color: "#4e5560", textAlign: "center", lineHeight: "84px"}}>I like playing with Princce.</div>
        </div>
        <div className="wrap">
          <div className="Chat" style={{fontSize: "28px", color: "#4e5560", textAlign: "center", lineHeight: "84px"}}>I like playing with Prince.</div>
        </div>
      </div>
      <div style={styles.chatBar}>
        <div>
          <input
            style={styles.in}
            type="text"
            className="chatinput"
          />

          {/* <button style={styles.btn_style} onClick={handleMessageSend}>
                    입력
                </button>                 */}
          <img
            src={sendIcon}
            alt=""
            className="sendicon"
          />
        </div>
      </div>
    </>
  );
}

export default ChattingResultPage;
