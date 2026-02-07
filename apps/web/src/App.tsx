import { useState } from "react";

import Header from "./components/Header";

export default function App() {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<any>(null);

  // speaking with backend example
  async function submit() {
    const res = await fetch("/api/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question_id: 1, user_answer: answer }),
    });

    const data = await res.json();
    setResult(data);
  }

  return (
    <div style={{ padding: 24 }}>
      <Header/>
      <input
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="type answer..."
      />
      <button onClick={submit}>check</button>

      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}