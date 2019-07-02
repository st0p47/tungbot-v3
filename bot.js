const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client();
const prefix = config.prefix;

client.login(config.token);

client.on ("ready", () => {
    console.log ("I'm ready to screech!")
    client.user.setActivity("try !help")
});

client.on('message', async message => {

    if (message.content.startsWith(prefix + "help")) {
        message.channel.send({
            embed: {
            "title": "Help",
            "description": "look at my shit bot lmao",
            "color": 12774770,
            "footer": {
                "text": "DM me any suggestions, my bot is bad hahaha"
            },
            "image": {
                "url": "https://st0p47.github.io/avnoor-scream-2.jpg"
            },
            "author": {
                "name": "me lol",
                "icon_url": "https://st0p47.github.io/just-a-bun.png"
            },
            "fields": [
                {
                "name": "!screech",
                "value": "luqualizer screech in the voice channel of the sender"
                },
                {
                "name": "!source",
                "value": "download screech source file"
                },
                {
                "name": "!github",
                "value": "PLEASE PLEASE DON'T GO HERE THX IM BAD IK"
                },
                {
                "name": "!stop",
                "value": "TungBot leaves the channel the sender is in"
                },
                {
                "name": "!jake",
                "value": "spam jake memes by Ze'ev request"
                }
            ]}
            }
        )
    }

    if (message.content.startsWith(prefix + "screech")) {
        if (message.author.bot) {return;}
        var channel = message.member.voiceChannel;
        if (!channel) message.channel.send("Join a voice channel!");
        channel.join()
            .then(connection => {
              const dispatcher = connection.playFile('./screech.mp3');
              dispatcher.on("end", end => {channel.leave();})
            })
            .catch(console.error);
        }

    if (message.content.startsWith(prefix + "stop")) {
        var channel = message.member.voiceChannel;
        channel.leave();
    }

    if (message.content.startsWith(prefix + "source")) {
        message.channel.send('source:', {
            files: ["./screech.mp3"]
        })
    }

    if (message.content.startsWith(prefix + "github")) {
        message.channel.send({
            embed: {
                "title": "pls no",
                "url": "https://github.com/st0p47/tungbot-v3",
                "footer": {
                    "text": "DM me any suggestions, my bot is bad haha"
                }
            }
        })
    }

    if (message.content.startsWith(prefix + "jake")) {
        var jakeMayMays = ["JLULKE", "Jake is in my house monkaGUN", "JakeRat", "Jake has riptire", "jake is mad"];
        var x = Math.floor(Math.random() * 6);
        if (x < 5 ) {
            message.channel.send(jakeMayMays[Math.floor(Math.random() * jakeMayMays.length)])
        } else {
            message.channel.send({
                embed: {
                    "title": "jakeMayMays",
                    "description": "thx boov",
                    "color": 12774770,
                    "footer": {
                        "text": "DM me any suggestions, my bot is bad haha"
                    },
                    "image": {
                        "url": "https://st0p47.github.io/jakeOMEGALUL.png"

                }}})
        }

    }

    if (message.content === "oof" || message.content === "Oof" || message.content === "OOF" || message.content === "00f"){
        message.channel.send("*poof")

    };
});
