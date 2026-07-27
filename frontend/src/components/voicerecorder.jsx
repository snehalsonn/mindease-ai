import { ReactMediaRecorder } from "react-media-recorder";
import { Mic } from "lucide-react";

export default function VoiceRecorder() {
  return (
    <ReactMediaRecorder
      audio
      render={({ startRecording, stopRecording, status }) => (
        <button
          onMouseDown={startRecording}
          onMouseUp={stopRecording}
          className={`rounded-full p-3 transition-all duration-300 ${
            status === "recording"
              ? "bg-red-500 animate-pulse"
              : "bg-pink-200 text-black"
          }`}
        >
          <Mic />
        </button>
      )}
    />
  );
}