import logo from "./logo.svg";
import "./App.css";
import LevelSettingPage from "./pages/LevelSettingPage";
import TopicSettingPage from "./pages/TopicSettingPage";
import EndPage from "./pages/EndPage";
import ChattingPage from "./pages/ChattingPage";
import SelfSettingPage from "./pages/SelfSettingPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChattingResultPage from "./pages/ChattingResultPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LevelSettingPage />} />
          <Route path="/select" element={<TopicSettingPage />} />
          <Route path="/end" element={<EndPage />} />
          <Route path="/new" element={<SelfSettingPage />} />
          <Route path="/chatroom" element={<ChattingPage />} />
          <Route path="/result" element={<ChattingResultPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
