import EmojiPicker from "emoji-picker-react";

export default function EmojiPickerComponent({
  open,
  onEmojiClick,
}) {
  if (!open) return null;

  return (
    <div className="absolute bottom-24 left-4 z-50 shadow-2xl">
      <EmojiPicker
        theme="dark"
        onEmojiClick={(emojiData) =>
          onEmojiClick(emojiData.emoji)
        }
      />
    </div>
  );
}