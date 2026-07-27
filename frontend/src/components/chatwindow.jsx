import { useEffect, useRef } from "react";

import AIAvatar from "./AIavatar";
import ChatBubble from "./chatbubble";
import TypingIndicator from "./typingindicator";
export default function ChatWindow({ messages, thinking }) {

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, thinking]);


  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-6">

      {/* AI Status Avatar */}
      <AIAvatar
        state={thinking ? "thinking" : "idle"}
      />


      {/* Messages */}
      {messages.map((msg, index) => (
        <ChatBubble
          key={index}
          sender={msg.sender}
          message={msg}
        />
      ))}


      {/* Typing Animation */}
      {thinking && (
        <TypingIndicator />
      )}


      {/* Auto Scroll Target */}
      <div ref={bottomRef} />

    </div>
  );
}