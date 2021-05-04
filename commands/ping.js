/* Command === Nama File*/

const TelegramBot = require('node-telegram-bot-api'); //Gaperlu sebenarnya
module.exports = {
    name: 'ping',
    description: 'Basic ping pong',
	execute(client, message, args) {

client.sendMessage(message.chat.id,`Pong!!`)

    }
}