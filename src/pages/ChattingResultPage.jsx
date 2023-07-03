import React, { useEffect, useState } from "react";
import logoImage from "../assets/logo.png";
import "../styles/ChattingResultPage.css";
import { Link } from "react-router-dom";
import xIcon from "../assets/xIcon.png";
import checkIcon from "../assets/checkIcon.png";

function ChattingResultPage() {
  return (
    <>
      <Link to="/">
        <img src={logoImage} alt="" className="logoimage" />
      </Link>
      <div className="chatWrap">
        <div className="wrap">
          <img
            src={checkIcon}
            alt=""
            width="30px"
            height="30px"
            marginTop="20px"
          ></img>
          <div className="oChat">hi</div>
        </div>
        <div className="wrap">
          <img
            src={checkIcon}
            alt=""
            width="30px"
            height="30px"
            marginTop="20px"
          ></img>
          <div className="oChat">hi</div>
        </div>
        <div>이렇게 표현하면 더 좋아요</div>
        <div className="wrap">
          <img src={xIcon} alt="" width="30px" height="30px"></img>
          <div className="xChat">hi</div>
        </div>
        <div className="wrap">
          <div className="Chat">hi</div>
        </div>
      </div>
    </>
  );
}

export default ChattingResultPage;
