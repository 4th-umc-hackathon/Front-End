import logoImage from "../assets/logo.png";
import CategoriBtn from "../components/CategoriBtn";
import "../styles/TopicSettingPage.css";
import topicImage1 from "../assets/topicimage1.png";
import topicImage2 from "../assets//topicimage2.png";
import topicImage3 from "../assets/topicimage3.png";
import topicImage4 from "../assets/topicimage4.png";

import { useNavigate } from 'react-router-dom';

const TopicSettingPage = () => {

    const navigate = useNavigate();
  
    function handleClick() {
        navigate('/new');
    };

  return (
    <div className="TopicSettingPage">
      <img src={logoImage} alt="" className="logoimage" />
      <div className="topicselect">
        <div
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            height: "60px",
            lineHeight: "60px",
            marginTop: "21.47px",
          }}
        >
          어떤 주제로 대화를 할까요?
        </div>
        <div className="topicmenu">
          <CategoriBtn
            text={"구직 면접"}
            underText={"면접 준비와 영어 공부를 동시에!"}
            imgSrc={topicImage1}
            color={"white"}
          />
          <CategoriBtn
            text={"셀럽 인터뷰"}
            underText={"유명 연예인이 되어볼까요?"}
            imgSrc={topicImage2}
            color={"white"}
          />
          <CategoriBtn
            text={"영화/드라마 스몰토크"}
            underText={"간단한 감상을 나눠보세요"}
            imgSrc={topicImage3}
            color={"white"}
          />
          <CategoriBtn
            text={"디즈니 공주가 되어보자"}
            underText={"애니메이션 속으로 들어가보세요"}
            imgSrc={topicImage4}
            color={"white"}
          />
        </div>
        <button className="selfmadebutton"
          onClick={handleClick}>
          <div
            style={{
              height: "20px",
              fontSize: "20px",
              color: "#666666",
              textAlign: "center",
              letterSpacing: "-1px",
            }}
          >
            마음에 드는 주제가 없다면?
          </div>
          <div
            style={{
              height: "26px",
              fontSize: "26px",
              fontWeight: "bold",
              marginTop: "12px",
              letterSpacing: "-1px",
            }}
          >
            직접 대화 주제 만들어보기
          </div>
        </button>
      </div>
    </div>
  );
};

export default TopicSettingPage;
