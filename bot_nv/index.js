const TelegramBot = require('node-telegram-bot-api');

const token = '1953874278:AAHyJkSkmqHNh0Z1Xc4c34VaHl0M9YDrggs';

const bot = new TelegramBot(token, {polling: true});

const arrMesssageBot = ['Привіт', 'Хай', 'Доброго дня'];

const roundMatch = (max, min) => {
   return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}


bot.on('message', msg => {
   const {id: id, first_name: userName} = msg.chat;

   if (/Привіт/gi.test(msg.text)) {
      bot.sendMessage(id, `${arrMesssageBot[roundMatch(2, 0)]} ${userName}`);
   }

   if (/хой/gi.test(msg.text)) {
      bot.sendMessage(id, `Привіт ${userName}`);
   }

});