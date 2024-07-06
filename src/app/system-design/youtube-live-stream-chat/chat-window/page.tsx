"use client";
import {
  LIVE_CHAT_MESSAGE_LIMIT,
  generateRandomMessage,
  generateRandomName,
  generateRandomPhoto,
} from "@/utils/constants";
import { useEffect, useState } from "react";
import ChatMessage from "./chatMessage";

const ChatWindow = () => {
  const [chatData, setChatData]: any = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setChatData((prev: any) => {
        let messageList = [
          {
            photoURL: generateRandomPhoto(),
            name: generateRandomName(),
            message: generateRandomMessage(),
          },
          ...prev,
        ];

        messageList = messageList.splice(0, LIVE_CHAT_MESSAGE_LIMIT);
        return messageList;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="m-4 h-[600px] w-full border flex border-slate-500 rounded-lg overflow-y-scroll flex-col-reverse">
      {chatData.map((chat: any, index: any) => {
        return <ChatMessage key={index} {...chat} />;
      })}
    </div>
  );
};

export default ChatWindow;
