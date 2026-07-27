import {
  Home,
  MessageCircle,
  Heart,
  Settings,
  Sparkles,
  X,
  Menu,
  Trash2
} from "lucide-react";

import { useState } from "react";
import ThemeToggle from "./themetoggle";
export default function Sidebar({
  onSettings,
  onNewChat,
  chats = [],
  onSelectChat,
  onDeleteChat
}) {


  const [open, setOpen] = useState(false);



  const menus = [
    { icon:<Home />, name:"Home" },
    { icon:<MessageCircle />, name:"Chats" },
    { icon:<Heart />, name:"Mood" },
    { icon:<Sparkles />, name:"Habits" }
  ];



  return (

    <>


      {/* Mobile Menu Button */}

      <button
        onClick={()=>setOpen(true)}
        className="
        md:hidden fixed top-5 left-5
        z-50 glass p-3 rounded-full
        "
      >

        <Menu />

      </button>





      <aside

      className={`
      fixed md:static z-40
      h-full w-72

      bg-black/40
      backdrop-blur-2xl

      border-r border-white/10

      flex flex-col

      transition-transform duration-300

      ${open 
      ? "translate-x-0"
      : "-translate-x-full md:translate-x-0"}

      `}

      >




        {/* Close */}

        <button

        onClick={()=>setOpen(false)}

        className="
        md:hidden absolute
        right-5 top-5
        "

        >

          <X />

        </button>






        {/* Logo */}

        <div className="p-8">


          <h1 className="
          text-4xl font-black
          ">

            🌿 MindEase

          </h1>


          <p className="
          text-neutral-400 mt-2
          ">

            AI Wellness Companion

          </p>


        </div>






        <div className="
        px-5 flex-1 overflow-y-auto
        space-y-4
        ">





          {/* New Chat */}

          <button

          onClick={onNewChat}

          className="
          w-full rounded-2xl
          bg-pink-200
          text-black

          py-4 font-bold

          hover:scale-105
          duration-300
          "

          >

            + New Chat

          </button>







          {/* Main menu */}


          {
          menus.map((item)=>(

            <div

            key={item.name}

            className="
            glass rounded-2xl
            p-5

            flex items-center gap-4

            hover:bg-white/10

            cursor-pointer
            "

            >

              {item.icon}

              {item.name}


            </div>

          ))
          }








          {/* Chat History */}

          <div className="pt-5">


            <h3 className="
            text-neutral-400
            px-2 mb-3
            ">

              Chats

            </h3>





            {
            chats.map((chat)=>(


              <div

              key={chat.id}

              className="
              glass rounded-2xl
              p-4 mb-3

              flex items-center
              justify-between

              hover:bg-white/10

              "

              >




                <button

                onClick={()=>onSelectChat(chat.id)}

                className="
                text-left
                truncate
                flex-1
                "

                >

                  {chat.title}


                </button>





                <button

                onClick={()=>onDeleteChat(chat.id)}

                className="
                text-red-400
                hover:scale-110
                duration-200
                "

                >

                  <Trash2 size={18}/>


                </button>




              </div>


            ))
            }


          </div>





        </div>








        {/* Bottom Settings */}


        <div

        className="
        p-6

        border-t
        border-white/10

        flex justify-around
        items-center

        "

        >


          <ThemeToggle />



          <button

          onClick={onSettings}

          className="
          hover:text-pink-200
          duration-300
          "

          >

            <Settings />

          </button>



        </div>





      </aside>







      {/* Mobile overlay */}

      {
      open && (

        <div

        onClick={()=>setOpen(false)}

        className="
        fixed inset-0
        bg-black/50
        backdrop-blur-sm

        z-30

        md:hidden
        "

        />

      )
      }





    </>

  );

}