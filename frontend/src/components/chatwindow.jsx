import { useEffect, useRef } from "react";

import AIAvatar from "./AIAvatar";
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


      <AIAvatar
        state={thinking ? "thinking" : "idle"}
      />


      {messages.map((msg, index) => (

        <ChatBubble
          key={index}
          sender={msg.sender}
          message={msg}
        />

      ))}



      {thinking && (

        <TypingIndicator />

      )}



      <div ref={bottomRef} />


    </div>

  );

}