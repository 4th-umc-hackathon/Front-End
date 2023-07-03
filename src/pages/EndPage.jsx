import logoImage from "../assets/logo.png";
import "../styles/EndPage.css";
import houseIcone from "../assets/houseicon.png";
import repeatIcone from "../assets/repeaticon.png";
import spellcheckIcone from "../assets/spellcheckicon.png";
import { Link } from "react-router-dom";

const EndPage = () => {
  return (
    <div className="Endpage">
      <img src={logoImage} alt="" className="logoimage" />
      <div className="topicselect">
        <div className="title">대화가 종료되었어요</div>
        <div className="subTitle">EnPT와 함께 즐거운 대화 나누셨나요?</div>
        <div className="topicmenu"></div>
        <button className="endButton">
          <div className="endButtonTitle">
            <img
              src={repeatIcone}
              alt=""
              style={{ marginRight: "10px", width: "30px" }}
            ></img>
            Retry
          </div>
          <div className="endButtonSub">같은 주제로 재도전</div>
        </button>
        <button className="endButton">
          <div className="endButtonTitle">
            <img
              src={spellcheckIcone}
              alt=""
              style={{ marginRight: "10px", width: "40px" }}
            ></img>
            Feedback
          </div>
          <div className="endButtonSub">
            내가 말한 내용에서 문법 오류를 수정해줘요
          </div>
        </button>
        <Link to="/">
          <button className="endButton">
            <div className="endButtonTitle">
              <img
                src={houseIcone}
                alt=""
                style={{
                  marginRight: "10px",
                  marginTop: "10px",
                  width: "30px",
                }}
              ></img>
              Home
            </div>
            <div className="endButtonSub">
              홈으로 돌아가서 다른 주제로 도전해봐요
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EndPage;
