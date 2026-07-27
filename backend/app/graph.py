from langgraph.graph import StateGraph

from app.state import WellnessState
from app.gemini import ask_gemini
from app.prompts import SYSTEM_PROMPT


def chatbot(state: WellnessState):

    prompt = (
        SYSTEM_PROMPT
        + "\n\nUser:\n"
        + state["user_message"]
    )

    answer = ask_gemini(prompt)

    return {
        "response": answer
    }


graph = StateGraph(WellnessState)


graph.add_node(
    "gemini",
    chatbot
)


graph.set_entry_point(
    "gemini"
)


graph.set_finish_point(
    "gemini"
)


mind_graph = graph.compile()