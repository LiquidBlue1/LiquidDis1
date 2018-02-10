const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', function(message) {
    if (message.content == "^clear") {
        try {
            if (message.member.hasPermission("MANAGE_MESSAGES")) {
                messages = message.channel.fetchMessages();
                message.channel.bulkDelete(messages);
            }
        } catch(e) {
            message.channel.send("ERROR: ERROR CLEARING CHANNEL.");
            console.log(e);
        }
    }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
