import React, { useEffect, useState } from 'react';
import ChatBlock from "../components/ChatBlock";
import logoImage from '../assets/logo.png';
import sendIcon from '../assets/sendicon.png'
import '../styles/ChattingPage.css'
import axios from 'axios';

const styles= {
    chatBar: {
        width: "100%",
        display: "flex",
        bottom: 0,
        position: "absolute",
        justifyContent: "center",
        marginBottom: "20px",
    },

    chat: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        bottom: 0,
        position: "absolute",
        marginBottom: "100px",
        
        
    },
    in: {
        width: 1200,
        height: 70,
        borderRadius: "20px",
        fontSize: "30px",
        paddingLeft: "40px",
        border: "none",
        boxShadow: '0 1px 4px 1px rgba(0, 0, 0, 0.2)'
    },
    btn_style: {
        display: "inline-block",
        padding: "10px 20px",
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center",
        textDecoration: "none",
        color: "grey",
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "20px",
        cursor: "pointer",
        transition: "backgroundColor 0.3s",
        height: 70,
        width: 100,
        marginLeft: "5px",
    },
    frame: {
        width: "100%",
    }


}
function ChattingPage() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleMessageSend = () => {
        if (inputValue.trim() !== '') {
          const newMessage = {
            id: Date.now(),
            text: inputValue,
          };
          setMessages([...messages, newMessage]);
        }
      };
    
    // 처음 질문 보내기 서버 통신 구현부
    useEffect(() => { axios({
        method: "post",
        url: "http://52.78.225.62:8080/api/chat",
        data: {
            level: "50" ,
            age: "teenager" ,
            place: "학교",
            situation: "학교에서 밥 먹을 때 친구와 함께 대화해보자",
            yourRole: "학생",
            myRole: "친구",
            userId: 1         ,
        },
      }).then((res) => {
        console.log(res);
    }); }, []);


    return (
    <>
    
        <img src={logoImage} alt="" className='logoimage'/>

        <div style={styles.chat}>
            <div className="message-list">
                {messages.map(message => (
                <div key={message.id} className="message">
                    <ChatBlock
                        text={message.text}
                    />
                </div>
                ))}
            </div>
        </div>

        <div style={styles.chatBar}>
            <div>
                <input
                    style={styles.in}
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    className='chatinput'
                />
                
                {/* <button style={styles.btn_style} onClick={handleMessageSend}>
                    입력
                </button>                 */}
                <img src={sendIcon} alt="" className='sendicon' onClick={handleMessageSend}/>
            </div>
        </div>

            {/* <div style={styles.chatBar}>
                <ChatInput color="white"/>
            </div> */}
    </>
    )
}

export default ChattingPage;