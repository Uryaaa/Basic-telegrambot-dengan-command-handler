module.exports = {
    name: 'pilih',
    category: 'utility',
    description: 'Biarkan saya yang pilihkan untuk kamu',
	execute(client, message, args) {
        let chooseString = message.text.split(' ').splice(1).join(' ').trim();
        if (chooseString === '') return client.sendMessage(message.chat.id,`Kegunaan: \n!pilih pilihan1; pilihan2;`)
        if (chooseString.endsWith(';')) {    
            chooseString = chooseString.substring(0, chooseString.length - 1);    
        }
        else if (!chooseString.endsWith(';')) return client.sendMessage(message.chat.id,`Akhiri pilihanmu dengan ;`)
        let msgSplit = chooseString.split(';');
        for (let i = 0; i < msgSplit.length; i++) {
            msgSplit[i] = msgSplit[i].trim();
        }
        if(msgSplit.length<2) return client.sendMessage(message.chat.id,`Tolong sediakan minimal 2 pilihan`)
        let result = msgSplit[Math.floor(Math.random() * msgSplit.length)];
client.sendMessage(message.chat.id,`🤔 Aku pilih... `+result)

    }
}