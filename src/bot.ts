import 'dotenv/config';
import weather from './functions/weather.js';
import { Bot, session, Context } from "grammy";
import {
  type Conversation,
  type ConversationFlavor,
  conversations,
  createConversation,
} from "@grammyjs/conversations";

type MyContext = Context & ConversationFlavor;

const bot = new Bot<MyContext>(process.env.BOT_TOKEN);

bot.use(session({ initial: () => ({}) }));
bot.use(conversations());

bot.use(createConversation(weather));

bot.command("start", async (ctx) => {
  ctx.reply(`Welcome! Through our Telegram Bot, you can see the weather in almost any city!\n\nType /weather for see a weather!`);
});

bot.command("weather", async (ctx) =>  {
  await ctx.conversation.enter("weather");
});

bot.start();
