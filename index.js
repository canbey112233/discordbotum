const { stripIndents, oneLine } = require('common-tags');
const Discord = require("discord.js");
const bot = new Discord.Client();

let prefix = "tr!";
let owner = "472694597118853120"; // 

bot.on("ready", () => {
    bot.user.setGame("tr!yardım ile kodlarımı öğrenebilirsiniz") 
    console.log("Bağlandım!")   
});

bot.login("NTEwNDU1Mzg2MTE4MjkxNDY2.DstFhw.gPugPISMmi1Yp1WodI6E6QhYCnM")

bot.on("message", message => {

    if (message.content.toLowerCase() === "sa") {
        message.reply("**Aleyküm Selam Balımın Gülü Hoşgeldin!**")
    }

    if (message.content === prefix + "sunucubilgi") {
        const embed = new Discord.RichEmbed()

            .addField("Sunucu Adı", message.guild.name, true)

            .addField("Sunucu ID", message.guild.id, true)

            .addField("Sunucu Sahibi", message.guild.owner, true)

            .addField("Toplam Üye Sayısı", message.guild.memberCount, true)

            .addField("AFK Süresi", message.guild.afkTimeout, true)

            .setFooter("Oluşturulma Tarihi " + message.guild.createdAt)

            .setColor(0xff0000)

        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "bilgi") {
        const embed = new Discord.RichEmbed()

            .addField("Bot Sahibi", `<@${owner}>`, true)

            .addField("Version", "0.0.2", true)

            .addField("Toplam Sunucu Sayısı", bot.guilds.size, true)

            .addField("Toplam Kullanıcı Sayısı", bot.users.size, true)
            
            .addField("Toplam Kanal Sayısı", bot.channels.size, true)

            .addField("Kitaplık Türü", "discord.js")

            .setColor(0x000001)
        
        return message.channel.sendEmbed(embed)
    }
	
	
	
    if (message.content === prefix + "kurabiye") {
        message.channel.sendMessage(`Canım gel buraya sana kurabiye vereceğim! <@${message.author.id}>`)
        message.react("🍪")
    }

	
	if (message.content === prefix + "avatarım") {
		message.channel.send(message.author.avatarURL);
	}
	
	
	
    if (message.content === prefix + "sigara") {
        message.channel.sendMessage(`:smoking: :cloud: :cloud:`)
    }
	
	
	if (message.content === prefix + "izmirmarsi") {
        message.channel.sendMessage(`https://www.youtube.com/watch?v=kxyifJ2ELD8 Girip Dinlemeni Tavsiye Ederim`)
    }
	
    if (message.content === prefix + "davet") {
        message.channel.sendMessage(`https://discordapp.com/oauth2/authorize?client_id=510455386118291466&scope=bot&permissions=8`)
    }
	
	
	    if (message.content === prefix + "bot-sunucu") {
        message.channel.sendMessage(`https://discord.gg/tKRtrjB`)
    }
	
	
	if (message.content === prefix + "yapimcim") {
        message.channel.sendMessage(`Can Celikus#7258`)
    }
	
	
    if (message.content === prefix + "colorkingdom") {
        message.channel.sendMessage(`https://discord.gg/JVuB4E2`)
    }
	
	
	if (message.content === prefix + "adamgibiadam") {
        message.channel.sendMessage(`! NaxR#2442`)
    }
	
	if (message.content === prefix + "duldul") {
        message.channel.sendMessage(`DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL DUL `)
    }
	
	if (message.content === prefix + "çukulataverbana") {
		message.channel.sendMessage (`:chocolate_bar: :chocolate_bar: :chocolate_bar:`)
		message.channel.sendMessage (`Al Lan Çukulatanı Denişik`)
	}
	
	

	
    if (message.content === prefix + "yardım") {
        message.channel.sendMessage(stripIndents`
**Selam, ben ${bot.user.username}!** Şuanda görmekte olduğunuz kısım benim bütün komutlarımı göstermektedir.

**Bilgi Komutları**
\`\`\`fix
${prefix}yardım - Botun bütün komutlarını size gösterir.
${prefix}sunucubilgi - Sunucu hakkkında detaylı bilgi verir.
${prefix}bilgi - Bot hakkında bilgi verir.
${prefix}yapimcim - Botun yapimcisini gösterir.
${prefix}adamgibiadam - Adam Gibi Adam.

\`\`\`

**Eğlence Komutları**
\`\`\`fix
${prefix}kurabiye - Size kurabiye verir.
${prefix}sigara - Size sigara yakar.
${prefix}çukulataverbana - Size çukulata verir.
${prefix}duldul - Size duldul çalar.
${prefix}avatarım - Size avatarınızın linkini atar.
\`\`\`

**Link Komutları**
\`\`\`fix
${prefix}izmirmarsi - İzmir Marşı linki atar.
${prefix}davet - Davet linkini atar.
${prefix}bot-sunucu - Botun sunucusunun linkini atar.
${prefix}colorkingdom - Süper bir sunucunun linkini atar.
\`\`\` `)
    }

});





bot.on("message", message => {

    const reklam = ["www.", "youtu.be"];
    if (reklam.some(word => message.content.includes(word)) ) {
        message.reply("**Reklam Yapma!!!** :rage:")
        message.delete()
    }

	

});
