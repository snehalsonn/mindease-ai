from fastapi import APIRouter
from pydantic import BaseModel

from app.graph import mind_graph


router = APIRouter()


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
def chat(data: ChatRequest):

    result = mind_graph.invoke(
        {
            "user_message": data.message,
            "response": ""
        }
    )

    return {
        "response": result["response"]
    }