import inquirer from "inquirer";
import OpenAI from "openai";
import fs from "fs";
import { config } from "dotenv";

config();

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

const readFromFile = () => {
  const story = fs.readFileSync("./story.txt", "utf-8");

  return story;
};

async function generateChatGPTResponse() {
  const story = readFromFile();

  // Create an assistant object
  const assistant = await openai.beta.assistants.create({
    name: "Story Questions Teller",
    instructions: "You have to answer questions based on a story we provide.",
    tools: [{ type: "code_interpreter" }],
    model: "gpt-4-1106-preview",
  });

  return inquirer
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

      console.log(completion.choices[0].message.content);

      const answers = await inquirer.prompt([
        {
          type: "confirm",
          name: "continue",
          message: "Do you want to continue?",
          default: true,
        },
      ]);

      return answers.continue;
    });
}

async function getUserInput() {
  let continueLoop = false;

  do {
    // Code for prompting the user to OPENAI.CHAT
    continueLoop = await generateChatGPTResponse();

    if (continueLoop) {
      console.log("Continuing...");
      continueLoop = await generateChatGPTResponse();
    }
  } while (continueLoop);
}

getUserInput();
