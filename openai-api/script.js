import inquirer from "inquirer";
import OpenAI from "openai";
import { config } from "dotenv";

config();

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

const completion = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [
    { role: "user", content: "Who is the father of nation in India?" },
  ],
});

console.log(completion.choices[0]);
