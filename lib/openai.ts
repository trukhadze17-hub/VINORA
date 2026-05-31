
import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function analyzeVIN(vin: string) {
  const response = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "system",
        content: "You are an automotive AI expert."
      },
      {
        role: "user",
        content: `Analyze this VIN: ${vin}`
      }
    ]
  });

  return response.choices[0].message.content;
}
