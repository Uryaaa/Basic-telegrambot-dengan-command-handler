const TelegramBot = require('node-telegram-bot-api');
const  {prefix} = require("../config.json")


module.exports = (client, message) => {
   
    if (message.text.indexOf(prefix) !== 0) return;

    const args = message.text.slice(prefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();

    const cmd = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
try{
    if (cmd) cmd.execute(client, message, args);
}catch(error){console.log(error)}
};
