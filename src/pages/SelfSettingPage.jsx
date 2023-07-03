import logoImage from '../assets/logo.png'
import Topic from '../components/Topic';
import '../styles/SelfSettingPage.css'
import { useNavigate } from 'react-router-dom'

const SelfSettingPage = () => {
    const navigate = useNavigate();
  
    function handleClick() {
        navigate('/chatroom');
    };

    return (
        <div className="SelfSettingPage">
            <img src={logoImage} alt="" className='logoimage'/>
            <div className='topicselect'>
                <div style={{fontSize: '48px', fontWeight: "bold", height: "60px", lineHeight: "60px", marginTop: "21.47px"}}>직접 대화 주제 만들어보기</div>
                <div style={{fontSize: '24px', height: "25px", lineHeight: "25px", color: "#a6a6a6", marginTop: "11px", marginBottom: "30px"}}>자유롭게 대화 상황을 설정해보아요!</div>
                <div className='menu'>장소</div>
                <Topic color={'white'} placeholder={'ex) 기자회견 장에서'}/>
                <div className='menu'>상황</div>
                <Topic color={'white'} placeholder={'ex) 셀럽을 인터뷰하는 잡지 기자'}/>
                <div className='menu'>내 역할</div>
                <Topic color={'white'} placeholder={'ex) 잡지 기자'}/>
                <div className='menu'>AI의 역할</div>
                <Topic color={'white'} placeholder={'ex) 셀럽'}/>
                <button 
                    className='startbutton'
                    onClick={handleClick}
                >
                    이대로 대화 시작하기
                </button>
            </div>
        </div>
    );
};

export default SelfSettingPage;