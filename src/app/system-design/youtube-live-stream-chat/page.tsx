import ChatWindow from "./chat-window/page";
import VideoWindow from "./video-window/page";

const YtSreamChatWindow = () => {
  return (
    <div className="flex m-5 ">
      <VideoWindow />
      <ChatWindow />
    </div>
  );
};

export default YtSreamChatWindow;
