
module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'utility',


    execute(client, message, args) {
        if (!args[0]) {

            const utility = client.commands.filter(x => x.category == 'utility').map((x) => '`' + x.name + '`').join(', ');
           
            client.sendMessage(message.chat.id,`📁 Utility\n${utility}`)
        } else {
            const command = client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return client.sendMessage(message.chat.id, "Command tidak ditemukan");

            client.sendMessage(message.chat.id,`Nama : ${command.name}\nDeskripsi : ${command.description}`)
        };
    },
}
