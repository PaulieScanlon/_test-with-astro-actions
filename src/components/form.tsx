import { actions } from "astro:actions";
import { useState } from "react";

export const Form = () => {
  const [result, setResult] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    const city = formData.get("city")!.toString();
    const { data } = await actions.getWeatherInfo({ city });

    setResult(data || null);
  }

  return (
    <>
      <form action={handleSubmit}>
        <input name="city" placeholder="Enter city" required />
        <button type="submit">Get Weather</button>
      </form>
      {result && <pre>{result}</pre>}
    </>
  );
};
