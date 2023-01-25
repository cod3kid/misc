import inquirer from "inquirer";
import OpenAI from "openai";
import { config } from "dotenv";

config();

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});
