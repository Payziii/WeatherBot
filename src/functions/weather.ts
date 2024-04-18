import { Context } from "grammy";
import {
  type Conversation,
  type ConversationFlavor,
} from "@grammyjs/conversations";

type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

export default async function weather(conversation: MyConversation, ctx: MyContext) {
  // let test = {name: ""};
  // let answer;
  // await ctx.reply("Придумайте название тесту");
  // answer = await conversation.wait();
  // test.name = answer.message.text;
  // await ctx.reply(`Выбранное название для теста: ${test.name}`);
}