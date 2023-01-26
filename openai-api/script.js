import inquirer from "inquirer";
import OpenAI from "openai";
import { config } from "dotenv";

config();

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

inquirer
  .prompt([
    {
      type: "input",
      name: "query",
      message: "Hi, how can I help you?",
    },
  ])
  .then(async (answer) => {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: answer.query }],
    });

    console.log(completion.choices[0]);
  });
