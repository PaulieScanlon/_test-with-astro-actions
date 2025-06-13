import { actions } from "astro:actions";
import { useState } from "react";

export const Form = () => {
  const [result, setResult] = useState<string | null>(null);

  async function handleSubmit() {
    const { data } = await actions.getGreeting({ name: "Houston" });
    setResult(data || null);
  }

  return (
    <>
    <div>{result}</div>
    <button onClick={handleSubmit}>Get greeting</button>
    </>
  );
};
