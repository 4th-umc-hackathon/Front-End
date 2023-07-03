import React from "react";

const PlaySound = async (text) => {
  const base64ToBlob = (base64, fileType) => {
    let typeHeader = "data:application/" + fileType + ";base64,";
    let audioSrc = typeHeader + base64;
    let arr = audioSrc.split(",");
    let array = arr[0].match(/:(.*?);/);
    let mime = (array && array.length > 1 ? array[1] : fileType) || fileType;
    let bytes = window.atob(arr[1]);
    let ab = new ArrayBuffer(bytes.length);
    let ia = new Uint8Array(ab);
    for (let i = 0; i < bytes.length; i++) {
      ia[i] = bytes.charCodeAt(i);
    }
    return new Blob([ab], {
      type: mime,
    });
  };

  const data = {
    voice: {
      languageCode: "en-US",
    },
    input: {
      text: text,
    },
    audioConfig: {
      audioEncoding: "mp3",
    },
  };

  try {
    const response = await fetch(
      "https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyBqmUHW-NlVLtIyjNJk1ymw084CXrtKImU",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const res = await response.json();
    let audioFile = new Audio();
    let audioBlob = base64ToBlob(res.audioContent, "mp3");
    audioFile.src = URL.createObjectURL(audioBlob);
    audioFile.playbackRate = 1; // 재생속도
    audioFile.play();
  } catch (error) {
    console.error("오류가 발생하였습니다.", error);
  }
};

export default PlaySound;
