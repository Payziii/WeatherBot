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
  const answer = await conversation.waitFrom(ctx.from);
  const city = answer.message.text;
  const data = await conversation.external(() => getWeather(city));

  if(data.error) {
    if (data.error.code == 1006) return ctx.reply("The city not found!");
    return ctx.reply("API error:\n\n"+data.error.message);
  }

  ctx.reply(`${data.location.name}, ${data.location.country}:\n\nWeather now:\nTemperature: ${<string>data.current.temp_f}°F\nFeeling temperature: ${<string>data.current.feelslike_f}°F\nHumidity: ${<string>data.current.humidity}%\nWind: ${<string>data.current.wind_kph} kph`)
}