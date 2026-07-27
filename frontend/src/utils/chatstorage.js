export function saveChats(chats) {
  localStorage.setItem(
    "mindease-chats",
    JSON.stringify(chats)
  );
}


export function getChats() {

  const saved = localStorage.getItem(
    "mindease-chats"
  );

  return saved
    ? JSON.parse(saved)
    : [];

}


export function createNewChat() {

  return {
    id: Date.now(),

    title: "New Chat",

    date: new Date().toLocaleDateString(),

    messages: [
      {
        sender:"bot",
        text:"🌿 Hi! I'm MindEase AI. How are you feeling today?",
        time:new Date().toLocaleTimeString([],{
          hour:"2-digit",
          minute:"2-digit"
        })
      }
    ]

  };

}