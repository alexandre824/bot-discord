const Discord = require('discord.js');

// const config = require('./config.json');

const { prefix, token } = require('./config.json');

const bot = new Discord.Client();

bot.once('ready', () => {   
    console.log('Estamos online!');
});

// bot.on('message', message => {
// 	console.log(message.content);
// });


bot.on('message', msg => {
    if (msg.content === 'teste'){
		const { exec, spawn } = require('child_process');
		exec('my.cmd', (err, stdout, stderr) => {
		  if (err) {
			console.error(err);
			return;
		  }else{
			console.log(stdout);
			msg.channel.send('site google online');
		  };
		  
		});
	
    }
});

//Jokempo tradicional
bot.on('message', msg => {
	if (!msg.content.startsWith(prefix) || msg.author.bot) return;

	const args = msg.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();
	if (command === 'jokempo') {
		if (!args.length) {
			return msg.reply('Você precisa colocar: pedra, papel ou tesoura \n caso precise de ajuda digite ;jokempo help');
		}

		const opcoes = {
			pedra: 1,
			papel: 2,
			tesoura: 3,
			help: 4
		};
		const escolhaDoUsuario = opcoes[args];
		const escolhaDoBot = Math.round(Math.random() * 2) + 1;

		if (escolhaDoUsuario === 1 && escolhaDoBot === 3) {
			console.log('Você ganhou!');
			msg.reply('Você ganhou! \n Você: :punch: \n Bot: :v:')
		  } else if (escolhaDoUsuario === 1 && escolhaDoBot === 2) {
			console.log('Você perdeu!');
			msg.reply('Você perdeu! \n Você: :punch: \n Bot: :raised_hand:')
		  } else if (escolhaDoUsuario === 1 && escolhaDoBot === 1) {
			console.log('Empatou!');
			msg.reply('Empate \n Você: :punch: \n Bot: :punch:')
		  }
		
		  if (escolhaDoUsuario === 2 && escolhaDoBot === 1) {
			console.log('Você ganhou!');
			msg.reply('Você ganhou! \n Você: :raised_hand: \n Bot: :punch:')
		  } else if (escolhaDoUsuario === 2 && escolhaDoBot === 3) {
			console.log('Você perdeu!');
			msg.reply('Você perdeu! \n Você: :raised_hand: \n Bot: :v:')
		  } else if (escolhaDoUsuario === 2 && escolhaDoBot === 2) {
			console.log('Empatou!');
			msg.reply('Empate \n Você: :raised_hand: \n Bot: :raised_hand:')
		  }
		
		  if (escolhaDoUsuario === 3 && escolhaDoBot === 2) {
			console.log('Você ganhou!');
			msg.reply('Você ganhou! \n Você: :v: \n Bot: :raised_hand:')
		  } else if (escolhaDoUsuario === 3 && escolhaDoBot === 1) {
			console.log('Você perdeu!');
			msg.reply('Você perdeu! \n Você: :v: \n Bot: :punch:')
		  } else if (escolhaDoUsuario === 3 && escolhaDoBot === 3) {
			console.log('Empatou!');
			msg.reply('Empate \n Você: :v: \n Bot: :v:')
		  }

		  if (escolhaDoUsuario === 4){
			msg.channel.send('Regras Jokempo: \n1 - Papel embrulha pedra \n 2 - pedra esmaga tesoura \n 3 - tesoura corta papel');
		  }
		  console.log(`Comando lançado: ${command}\Argumentos: ${args}`);

	}

});
//Jokempo the big bang theory
bot.on('message', msg => {
	if (!msg.content.startsWith(prefix) || msg.author.bot) return;

	const args = msg.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();
	if (command === 'jokemspock') {
		if (!args.length) {
			return msg.reply('Você precisa colocar: pedra, papel, tesoura, largato ou spock \n caso precise de ajuda digite ;jokemspock help');
		}

		const opcoes = {
			pedra: 1,
			papel: 2,
			tesoura: 3,
			largato: 4,
			spock: 5,
			help: 6
		};
		const escolhaDoUsuario = opcoes[args];
		const escolhaDoBot = Math.round(Math.random() * 4) + 1;

		if (escolhaDoUsuario === 1 && escolhaDoBot === 3) {
			console.log('Você ganhou!');
			msg.reply('Você ganhou! \n Você: :punch: \n Bot: :v:')
		  } else if (escolhaDoUsuario === 1 && escolhaDoBot === 2) {
			console.log('Você perdeu!');
			msg.reply('Você perdeu! \n Você: :punch: \n Bot: :raised_hand:')
		  } else if (escolhaDoUsuario === 1 && escolhaDoBot === 1) {
			console.log('Empatou!');
			msg.reply('Empate \n Você: :punch: \n Bot: :punch:')
		  } else if (escolhaDoUsuario === 1 && escolhaDoBot === 4) {
			console.log('Você ganhou!!');
			msg.reply('Você ganhou! \n Você: :punch: \n Bot: :lizard:')
		  } else if (escolhaDoUsuario === 1 && escolhaDoBot === 5) {
			console.log('Você perdeu!');
			msg.reply('Você perdeu! \n Você: :punch: \n Bot: :vulcan:')
		  }
		
		  if (escolhaDoUsuario === 2 && escolhaDoBot === 1) {
			console.log('Você ganhou!');
			msg.reply('Você ganhou! \n Você: :raised_hand: \n Bot: :punch:')
		  } else if (escolhaDoUsuario === 2 && escolhaDoBot === 3) {
			console.log('Você perdeu!');
			msg.reply('Você perdeu! \n Você: :raised_hand: \n Bot: :v:')
		  } else if (escolhaDoUsuario === 2 && escolhaDoBot === 2) {
			console.log('Empatou!');
			msg.reply('Empate \n Você: :raised_hand: \n Bot: :raised_hand:')
		  } else if (escolhaDoUsuario === 2 && escolhaDoBot === 4) {
			console.log('Você perdeu!!');
			msg.reply('Você perdeu! \n Você: :raised_hand: \n Bot: :lizard:')
		  } else if (escolhaDoUsuario === 2 && escolhaDoBot === 5) {
			console.log('Você ganhou!');
			msg.reply('Você ganhou! \n Você: :raised_hand: \n Bot: :vulcan:')
		  }
		
		  if (escolhaDoUsuario === 3 && escolhaDoBot === 2) {
			console.log('Você ganhou!');
			msg.reply('Você ganhou! \n Você: :v: \n Bot: :raised_hand:')
		  } else if (escolhaDoUsuario === 3 && escolhaDoBot === 1) {
			console.log('Você perdeu!');
			msg.reply('Você perdeu! \n Você: :v: \n Bot: :punch:')
		  } else if (escolhaDoUsuario === 3 && escolhaDoBot === 3) {
			console.log('Empatou!');
			msg.reply('Empate \n Você: :v: \n Bot: :v:')
		  } else if (escolhaDoUsuario === 3 && escolhaDoBot === 4) {
			console.log('Você ganhou!!');
			msg.reply('Você ganhou! \n Você: :v: \n Bot: :lizard:')
		  } else if (escolhaDoUsuario === 3 && escolhaDoBot === 5) {
			console.log('Você perdeu!');
			msg.reply('Você perdeu! \n Você: :v: \n Bot: :vulcan:')
		  }

		  if (escolhaDoUsuario === 4 && escolhaDoBot === 2) {
			console.log('Você ganhou!');
			msg.reply('Você ganhou! \n Você: :lizard: \n Bot: :raised_hand:')
		  } else if (escolhaDoUsuario === 4 && escolhaDoBot === 1) {
			console.log('Você perdeu!');
			msg.reply('Você perdeu! \n Você: :lizard: \n Bot: :punch:')
		  } else if (escolhaDoUsuario === 4 && escolhaDoBot === 3) {
			console.log('Você perdeu!');
			msg.reply('Você perdeu! \n Você: :lizard: \n Bot: :v:')
		  } else if (escolhaDoUsuario === 4 && escolhaDoBot === 4) {
			console.log('Empate');
			msg.reply('Empate \n Você: :lizard: \n Bot: :lizard:')
		  } else if (escolhaDoUsuario === 4 && escolhaDoBot === 5) {
			console.log('Você ganhou!');
			msg.reply('Você ganhou! \n Você: :lizard: \n Bot: :vulcan:')
		  }

		  if (escolhaDoUsuario === 5 && escolhaDoBot === 2) {
			console.log('Você perdeu!');
			msg.reply('Você perdeu! \n Você: :vulcan: \n Bot: :raised_hand:')
		  } else if (escolhaDoUsuario === 5 && escolhaDoBot === 1) {
			console.log('Você ganhou!');
			msg.reply('Você ganhou! \n Você: :vulcan: \n Bot: :punch:')
		  } else if (escolhaDoUsuario === 5 && escolhaDoBot === 3) {
			console.log('Você ganhou!');
			msg.reply('Você ganhou! \n Você: :vulcan: \n Bot: :v:')
		  } else if (escolhaDoUsuario === 5 && escolhaDoBot === 4) {
			console.log('Você perdeu!');
			msg.reply('Você perdeu! \n Você: :vulcan: \n Bot: :lizard:')
		  } else if (escolhaDoUsuario === 5 && escolhaDoBot === 5) {
			console.log('Empate');
			msg.reply('Empate \n Você: :vulcan: \n Bot: :vulcan:')
		  }

		  if (escolhaDoUsuario === 6){
			msg.channel.send('Regras Jokemspock: \n1 - Tesoura corta papel\n2 - Papel cobre pedra\n3 - Pedra esmaga lagarto\n4 - Lagarto envenena Spock\n5 - Spock esmaga (ou derrete) tesoura\n6 - Tesoura decapita lagarto\n7 - Lagarto come papel\n8 - Papel refuta Spock\n9 - Spock vaporiza pedra\n10 - Pedra amassa tesoura');
		  }
		console.log(`Comando lançado: ${command}\Argumentos: ${args}`);
	}

});

bot.on('guildMemberAdd', member => {
	bot.channels.get(boas-vindas).send("My Message");
	console.log(`${member.user.username} has joined`);
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
	// } else if (msg.content.startsWith(`${prefix}`)) {
    //     msg.reply('Digite "¬sos" ou "¬help" para obter ajuda');
    // }
	}
});
bot.on('message', msg => {
    if (msg.content === 'A amizade é forte' || msg.content === 'a amizade é forte'){
	msg.channel.send('...a curtição é louca e a parceria é eterna.');
    }
});

// bot.on('message', msg => {
// 	if (msg.content === '¬ping') {
// 		// envia devolta "Pong." para o canal que mando a mensagem
// 		msg.channel.send('Pong.');
//	}
// });

bot.on('message', msg => {
	if (!msg.content.startsWith(prefix) || msg.author.bot) return;

	const args = msg.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();
	// ...
	 if (command === 'args-info') {
		if (!args.length) {
			return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
		}

		msg.channel.send(`Command name: ${command}\nArguments: ${args}`);
	}else if (command === 'chutar') {
		if (!msg.mentions.users.size) {
			return msg.reply('Você precisa marcar alguem para usar o comando chutar!');
		}
		const taggedUser = msg.mentions.users.first();

		msg.channel.send(`Você pretende chutar: ${taggedUser.username}`);
	}else if (command == 'avatar') {
		if (!msg.mentions.users.size) {
			return msg.channel.send(`Your avatar: <${msg.author.displayAvatarURL({ format: 'png', dynamic: true })}>`);
		}
		
		const avatarList = msg.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL({ format: 'png', dynamic: true })}>`;
		});
		msg.channel.send(avatarList);

	}
});

bot.login(token);
// bot.login(config.token);
