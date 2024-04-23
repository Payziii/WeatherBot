// Importing required packages and files
import 'dotenv/config';
import weather from './functions/weather.js';
import { Bot, session, Context } from "grammy";
import {
  type ConversationFlavor,
  conversations,
  createConversation,
} from "@grammyjs/conversations";

// Creating a bot
type MyContext = Context & ConversationFlavor;
const bot = new Bot<MyContext>(process.env.BOT_TOKEN);

// Connecting dependencies
bot.use(session({ initial: () => ({}) }));
bot.use(conversations());
bot.use(createConversation(weather));

// Creating a start command
bot.command("start", async (ctx) => {
  ctx.reply(`Welcome! With our Telegram Bot, you can see the weather in almost any city!\n\nType /weather for see a weather!`);
});

// Creating a weather command
bot.command("weather", async (ctx) =>  {
  await ctx.conversation.enter("weather");
});

// Starting a bot
bot.start();
