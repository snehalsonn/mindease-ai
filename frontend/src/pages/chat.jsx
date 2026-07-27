import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/sidebar";
import CursorGlow from "../components/CursorGlow";
import FloatingPetals from "../components/FloatingPetals";
import ChatWindow from "../components/chatwindow";
import ChatInput from "../components/chatinput";
import SettingsModal from "../components/settingModal";


export default function Chat() {


  const defaultMessage = [
    {
      sender: "bot",
      text: "🌿 Hi! I'm MindEase AI. How are you feeling today?",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ];



  const [messages, setMessages] = useState(defaultMessage);

  const [chats, setChats] = useState([]);

  const [activeChat, setActiveChat] = useState(null);

  const [thinking, setThinking] = useState(false);

  const [settingsOpen, setSettingsOpen] = useState(false);


  const deleteChat = (id)=>{

  setChats(prev =>
    prev.filter(chat => chat.id !== id)
  );


  if(activeChat === id){

    setActiveChat(null);

    setMessages(defaultMessage);

  }

};


  // Load saved chats

  useEffect(() => {

    const savedChats = localStorage.getItem("mindease-chats");

    if(savedChats){
      setChats(JSON.parse(savedChats));
    }

  }, []);




  // Save chats

  useEffect(() => {

    localStorage.setItem(
      "mindease-chats",
      JSON.stringify(chats)
    );

  }, [chats]);





  // Create new chat

  const createNewChat = () => {


    const newChat = {

      id: Date.now(),

      title: "New Chat",

      date: "Today",

      messages: defaultMessage

    };



    setChats(prev => [
      newChat,
      ...prev
    ]);


    setActiveChat(newChat.id);

    setMessages(defaultMessage);

  };





  // Select old chat

  const selectChat = (id)=>{


    const chat = chats.find(
      c => c.id === id
    );


    if(chat){

      setActiveChat(id);

      setMessages(chat.messages);

    }

  };






  // Send message to AI

  const sendMessage = async(text)=>{


    if(!text.trim()) return;



    const userMessage = {

      sender:"user",

      text,

      time:new Date().toLocaleTimeString([],{
        hour:"2-digit",
        minute:"2-digit"
      })

    };



    const updatedMessages = [
      ...messages,
      userMessage
    ];


    setMessages(updatedMessages);


    setThinking(true);



    try{


      const response = await axios.post(

        "http://127.0.0.1:8000/chat",

        {
          message:text
        }

      );



      const botMessage = {

        sender:"bot",

        text:response.data.response,

        time:new Date().toLocaleTimeString([],{
          hour:"2-digit",
          minute:"2-digit"
        })

      };



      const finalMessages = [
        ...updatedMessages,
        botMessage
      ];



      setMessages(finalMessages);



      // update current chat

      if(activeChat){

        setChats(prev =>
          prev.map(chat =>
            chat.id === activeChat
              ? {
                  ...chat,
                  messages:finalMessages,
                  title:text.slice(0,20)
                }
              : chat
          )
        );

      }



    }
    catch(error){


      console.log(error);


      setMessages(prev=>[
        ...prev,
        {
          sender:"bot",
          text:"⚠️ Sorry, I couldn't connect to my AI brain.",
          time:new Date().toLocaleTimeString([],{
            hour:"2-digit",
            minute:"2-digit"
          })
        }
      ]);

    }



    setThinking(false);


  };





  return (

    <div className="
    relative h-screen flex overflow-hidden
    bg-[#090909] text-white
    ">


      <CursorGlow />

      <FloatingPetals />



      <Sidebar
  onSettings={() => setSettingsOpen(true)}
  onNewChat={createNewChat}
  chats={chats}
  onSelectChat={selectChat}
  onDeleteChat={deleteChat}
/>




      <div className="
      relative z-10 flex flex-1 flex-col
      ">



        <header className="
        h-20 border-b border-white/10
        backdrop-blur-xl bg-black/20
        flex items-center px-8
        ">


          <div>

            <h2 className="text-2xl font-bold">

              🌿 MindEase AI

            </h2>


            <p className="text-neutral-400">

              Your safe space to talk.

            </p>


          </div>


        </header>





        <ChatWindow

          messages={messages}

          thinking={thinking}

        />





        <ChatInput

          onSend={sendMessage}

        />



      </div>






      {settingsOpen && (

        <div className="
        absolute inset-0
        bg-black/50
        backdrop-blur-sm
        flex items-center justify-center
        z-50
        ">


          <SettingsModal

            onClose={() =>
              setSettingsOpen(false)
            }

          />


        </div>

      )}



    </div>

  );

}