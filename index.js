const TelegramBot = require('node-telegram-bot-api');
const fs = require("fs")
const Enmap = require("enmap")
const {token} = require("./config.json");
const client = new TelegramBot(token, {polling: true});

client.commands = new Enmap();
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    // Checking file js
    let props = require(`./commands/${file}`);
    //command file name
    let commandName = file.split(".")[0];
    console.log(`Command tersedia : ${commandName}`);
    client.commands.set(commandName, props);
  });
});
const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of events) {
    console.log(`memuat event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};


