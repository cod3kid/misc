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
  const dataExist = db.find((fileData) => fileData.filename === file.filename);
  let assistant, newThread;

  if (!dataExist) {
    // Creates a new assistant
    assistant = await openai.beta.assistants.create({
      name: "Story Questions Teller",
      instructions: "You have to answer questions based on a story we provide.",
      tools: [{ type: "code_interpreter" }],
      model: "gpt-4-1106-preview",
    });

    // Creates a new thread
    newThread = await openai.beta.threads.create();

    // Creates a new message
    await openai.beta.threads.messages.create(newThread.id, {
      role: "user",
      content: `Could you please answer bunch of questions based on the story given below?\n\n ${story}`,
    });
  } else {
    const { assistant_id, thread_id } = dataExist;
    assistant = { id: assistant_id };
    newThread = { id: thread_id };
  }

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
      await openai.beta.threads.messages.create(newThread.id, {
        role: "user",
        content: answer.query,
      });

      // Runs the thread
      await openai.beta.threads.runs.create(newThread.id, {
        assistant_id: assistant.id,
      });

      console.log("\nGenerating Content...\n");

      await sleep(10000);

      const messagesList = await openai.beta.threads.messages.list(
        newThread.id
      );

      console.log("Answer: \n", messagesList.data[0].content[0].text.value);

      if (!dataExist) {
        db.push({
          filename: file.filename,
          thread_id: newThread.id,
          assistant_id: assistant.id,
        });

        fs.writeFileSync("db.json", JSON.stringify(db, null, 2));
      }

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
