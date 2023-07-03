import logoImage from "../assets/logo.png";
import LevelBtn from "../components/LevelBtn";
import "../styles/LevelSettingPage.css";
import { Link } from "react-router-dom";

const LevelSettingPage = () => {
  return (
    <div className="LevelSettingPage">
      <Link to="/">
        {" "}
        <img src={logoImage} alt="" className="logoimage" />
      </Link>
      <div className="testbox">
        <div
          style={{
            fontSize: "48px",
            letterSpacing: "-1px",
            fontWeight: "bold",
            height: "60px",
            lineHeight: "60px",
            marginTop: "143px",
          }}
        >
          대화 레벨을 선택해주세요
        </div>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "500",
            letterSpacing: "-1px",
            height: "25px",
            lineHeight: "25px",
            color: "#a6a6a6",
            marginTop: "11px",
            marginBottom: "75px",
          }}
        >
          선택한 대화 레벨에 따라 답변의 길이 수가 달라져요!
        </div>
        <LevelBtn text={"Pre"} underText={"초급"} color={"white"} />
        <LevelBtn text={"Mid"} underText={"중급"} color={"white"} />
        <LevelBtn text={"High"} underText={"고급"} color={"white"} />
      </div>
    </div>
  );
};

export default LevelSettingPage;
