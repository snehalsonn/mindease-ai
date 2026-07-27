import { useState } from "react";
import { SendHorizontal, Smile, Paperclip } from "lucide-react";

import DragDropZone from "./dragdropzone";
import ImagePreview from "./imagepreview";
import EmojiPickerComponent from "./emojipickercomponent";
import VoiceRecorder from "./voicerecorder";
export default function ChatInput({ onSend }) {

  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [emojiOpen, setEmojiOpen] = useState(false);


  const send = () => {

    if (!message.trim() && !image) return;

    onSend(message, image);

    setMessage("");
    setImage(null);

  };


  return (

    <div className="relative p-6">


      {/* Emoji popup */}

      <EmojiPickerComponent

        open={emojiOpen}

        onEmojiClick={(emoji)=>{

          setMessage((prev)=>prev + emoji);

        }}

      />



      {/* Image preview */}

      {image && (

        <ImagePreview

          file={image}

          onRemove={()=>setImage(null)}

        />

      )}



      {/* Drag area only when no image */}

      {!image && (

        <DragDropZone

          onImage={setImage}

        />

      )}




      <div
        className="
        glass
        rounded-3xl
        p-5
        flex
        items-end
        gap-4
        "
      >



        {/* Attachment */}

        <button
          onClick={() => document.getElementById("imageUpload").click()}
          className="hover:text-pink-200 duration-300"
        >

          <Paperclip />

        </button>


        <input

          id="imageUpload"

          type="file"

          hidden

          accept="image/*"

          onChange={(e)=>{

            if(e.target.files[0])
              setImage(e.target.files[0]);

          }}

        />




        {/* Emoji */}

        <button

          onClick={()=>setEmojiOpen(!emojiOpen)}

          className="hover:text-pink-200 duration-300"

        >

          <Smile />

        </button>




        {/* Text */}

        <textarea

          rows={1}

          value={message}

          onChange={(e)=>setMessage(e.target.value)}

          onInput={(e)=>{

            e.target.style.height="auto";

            e.target.style.height =
            e.target.scrollHeight+"px";

          }}

          onKeyDown={(e)=>{

            if(e.key==="Enter" && !e.shiftKey){

              e.preventDefault();

              send();

            }

          }}

          placeholder="Share what's on your mind..."

          className="
          flex-1
          resize-none
          bg-transparent
          outline-none
          max-h-40
          "

        />





        {/* Voice */}

        <VoiceRecorder />





        {/* Send */}

        <button

          onClick={send}

          className="
          bg-pink-200
          text-black
          rounded-full
          p-3
          hover:scale-110
          duration-300
          "

        >

          <SendHorizontal />

        </button>



      </div>


    </div>

  );

}