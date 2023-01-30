import inquirer from "inquirer";
import OpenAI from "openai";
import fs from "fs";
import { config } from "dotenv";
import { promisify } from "util";

config();
const sleep = promisify(setTimeout);
let story, file;

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

const readFromFile = (fileName) => {
  console.log("\n Reading the file...\n");
  const data = fs.readFileSync(fileName, "utf-8");

  return data;
};

const readDatabase = () => {
  const rawData = fs.readFileSync("db.json");
  const data = JSON.parse(rawData);

  return data;
};

async function generateChatGPTResponse() {
  // Read the database
  const db = readDatabase();

  // Create an assistant object
  const assistant = await openai.beta.assistants.create({
    name: "Story Questions Teller",
    instructions: "You have to answer questions based on a story we provide.",
    tools: [{ type: "code_interpreter" }],
    model: "gpt-4-1106-preview",
  });

  // Create new thread
  const newThread = await openai.beta.threads.create();

  // Ask a question
  await openai.beta.threads.messages.create(newThread.id, {
    role: "user",
    content: `Could you please answer bunch of questions based on the story given below?\n\n ${story}`,
  });

  // console.log("Thread Question ID: ", threadQuestion);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "query",
        message: "Hi, how can I help you?",
      },
    ])
    .then(async (answer) => {
      // Create a message based on user's question
      const threadMessages = await openai.beta.threads.messages.create(
        newThread.id,
        {
          role: "user",
          content: answer.query,
        }
      );

      //   console.log("Thread Message ID: ", threadMessages.id);

      // run the thread
      await openai.beta.threads.runs.create(newThread.id, {
        assistant_id: assistant.id,
      });

      //   console.log("Run ID: ", runThread.id);

      //   const retrieveRanThread = await openai.beta.threads.runs.retrieve(
      //     newThread.id,
      //     runThread.id
      //   );

      //   await openai.beta.threads.messages.retrieve(
      //     newThread.id,
      //     threadMessages.id
      //   );
      console.log("\nGenerating Content...\n");

      await sleep(10000);

      const messagesList = await openai.beta.threads.messages.list(
        newThread.id
      );

      console.log("Answer: \n", messagesList.data[0].content[0].text.value);

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

  file = await inquirer.prompt([
    {
      type: "input",
      name: "filename",
      message: "Please enter the file name",
    },
  ]);

  story = readFromFile(file.filename);

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
