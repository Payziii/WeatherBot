// Importing required packages and files
import { Context } from "grammy";
import {
  type Conversation,
  type ConversationFlavor,
} from "@grammyjs/conversations";
import getWeather from './getWeather.js';

// Creating types
type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

// Creating a fucntion to view the weather
export default async function weather(conversation: MyConversation, ctx: MyContext) {
  await ctx.reply("Enter a city name:");
  const answer = await conversation.wait();
  const city = answer.message.text;
  const data = await getWeather(city);
  console.log(data)
}