const Discord = require('discord.js');

// const config = require('./config.json');

const { prefix, token } = require('./config.json');

const bot = new Discord.Client();

bot.once('ready', () => {   
    console.log('Ready!');
});

bot.on('message', msg => {
	if (!msg.content.startsWith(prefix) || msg.author.bot) return;

	const args = msg.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();
	// ...
});
bot.on('guildMemberAdd', member => { 
    //Acha o canal de texto para ser escrito
    const channel = member.guild.channels.cache.find(ch => ch.name === 'boas-vindas');
    //Caso não tenha um canal com o nome ele retorna null
    if (!channel) return;
    //Envia a mensagem caso ache o canal
    channel.send('Seja bem vindo, ${member}');
});



// bot.on('message', msg => {
//     if (msg.content === '¬oi'){
//         msg.reply('Esse é o meu primeiro bot!');
//     }
// });

bot.on('message', msg => {
	if (msg.content.startsWith(`${prefix}ping`)) {
		msg.channel.send('Pong.');
	} else if (msg.content.startsWith(`${prefix}beep`)) {
		msg.channel.send('Boop.');
	} else if (msg.content === `${prefix}server`) {
		msg.channel.send(`Server name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`);
	} else if (msg.content.startsWith(`${prefix}`)) {
        msg.reply('Digite "¬sos" ou "¬help" para obter ajuda');
    }
});

bot.on('message', msg => {
    if (msg.content === 'A amizade é forte' || msg.content === 'a amizade é forte'){
    // envia devolta "Pong." para o canal que mando a mensagem
	msg.channel.send('...a curtição é louca e a parceria é eterna.');
    }
});

bot.on('message', msg => {
	if (msg.content === '¬ping') {
		// envia devolta "Pong." para o canal que mando a mensagem
		msg.channel.send('Pong.');
	}
});



bot.login(token);
// bot.login(config.token);
