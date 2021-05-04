const TelegramBot = require('node-telegram-bot-api'); //Gaperlu sebenarnya
const moment = require("moment")
module.exports = {
    name: 'waktu',
    category: 'utility',
    description: 'Waktu sekarang dalam wita',
	execute(client, message, args) {
 moment.locale('id');
 let time = moment().utcOffset(+8).format("dddd, MMMM Do YYYY, H:mm:ss a ")
client.sendMessage(message.chat.id,`Sekarang ${time}`)

    }
}