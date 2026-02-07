from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# data model example
class VerifyRequest(BaseModel):
    question_id: int
    user_answer: str

# post function example (data recieved)
@app.post("/api/verify")
def verify(req: VerifyRequest):
    correct_answer = "cmp"

    is_correct = req.user_answer.strip().lower() == correct_answer

    return {
        "question_id": req.question_id,
        "is_correct": is_correct,
        "correct_answer": correct_answer,
    }

# get funcion example (read only information)
@app.get("/api/health")
def health():
    return {"status": "ok", "message": "backend is running"}
