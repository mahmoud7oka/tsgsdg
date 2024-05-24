const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

const prefix = "+";//برفكس حقك
const line = "https://media.discordapp.net/attachments/1159128306566840480/1159972472502886430/84856a6896ea7f5d.png"

var warn = [
        "1160854523640815668",//warn a
        "1160854569518116906",//warn b
        "1160854608235741225"//warn 
          ] 
//كود الحالة
//=======================================================

client.on('ready', () => {
  console.log('im online')
  client.user.setActivity('Hollywood S .', { type: 'PLAYING' })
});

//===================================================
//فروع
client.on("message", msg => {
  if (msg.content === "فروع") { 
    msg.reply(":https://discord.gg/hly"); 
  }
});

client.on("message", message => {
    if (message.channel.type == "dm") return;
    if (!message.guild) return;
    if (!message.member) return;
    if (message.member.hasPermission("ADMINISTRATOR")) return;
    
  let array = ["حساب","شوب","سعر","هاك","هكر","بيع","شراء","حسابات","متجر"]
  for (let i = 0; i < array.length; i++) {
        if (message.content.includes(array[i])) {
        message.delete()
        message.reply("**يمنع ذكر هذه الكلمات هنا**").then(msg => msg.delete({timeout: 5000}))
        return;
        }
    }
})

client.on("messageCreate", message => {
		try {
		if (message.channel.type !== "GUILD_TEXT") return;
		if (message.author.bot) return;
		if (!message.guild) return;
		if (!message.member) return;
		if (message.member.permissions.has("MANAGE_GUILD")) return;
		let blackWords = ["@everyone"]
		for (let i = 0; i < blackWords.length; i++) {
			if (message.content.includes(blackWords[i])) {
        try { message.delete().catch(() => {}) } catch {}
				message.channel.send(`**${message.author}, مــضاد الــمنشن .**`).then(msg => {
					setTimeout(() => {
						try { msg.delete().catch(() => {}) } catch { }
					},5000)
				})
				return;
      }
		}
		} catch (err) {
			console.log(err)
		}
	})

client.on('message', async function(msg) {
    const devs = [
        "399864383276056577",
        "964945988731162724",
        "650452462347747371",
      "816358369610039326"
    ]; // اي دي الناس الي تقدر تستعمل الكود
    if (msg.content.startsWith(prefix + "tempRole")) {
        const ms = require('ms');
        var args = msg.content.split(' ');
        var member =
            msg.mentions.members.first() ||
            msg.guild.members.cache.find(member => member.user.tag == args[1]) ||
            msg.guild.members.cache.find(member => member.user.username == args[1]) ||
            msg.guild.members.cache.find(member => member.user.id == args[1]);
        var role =
            msg.mentions.roles.first() ||
            msg.guild.roles.cache.find(role => role.name === args[2]) ||
            msg.guild.roles.cache.find(role => role.id === args[2]);
        var time = args[3];
        if (!devs.includes(msg.author.id)) return msg.reply('اتكل');
        if (!member) return msg.reply('منشن أو اكتب اي دي أو اسم الشخص');
        if (!role) return msg.reply('منشن أو أسم أو اي دي الرتبه');
        if (!time) time = "24h";
        var memberInfo = msg.guild.member(member)
        memberInfo.roles.add(role)
      
        msg.channel.send(
            new Discord.MessageEmbed()
            .setColor(role.hexColor)
            .setDescription(`> \`-\` **Done Give's <@!${member.user.id}> The <@&${role.id}> Role, Ends Is: \`${ms(ms(time))}\`**`)
        )
        setTimeout(function() {
            memberInfo.roles.remove(role)
        }, ms(time));
    }
});


client.on('message', async function(msg) {
    if (msg.content.startsWith(prefix + "warn")) {
        const ms = require('ms');
        const args = msg.content.split(' ');
        const member =
            msg.mentions.members.first() ||
            msg.guild.members.cache.find(member => member.user.tag == args[1]) ||
            msg.guild.members.cache.find(member => member.user.username == args[1]) ||
            msg.guild.members.cache.find(member => member.user.id == args[1]);
        const role =
            msg.mentions.roles.first() ||
            msg.guild.roles.cache.find(role => role.name === args[2]);
            msg.guild.roles.cache.find(role => role.id === args[2]);
        const pic = args[3];
        const reason = args[4] || args[5] || args[6] || args[7] || args[8] || args[9] || args[10];
        if(!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send(`> ** أنـت لا تـمـتـلـك صـلاحـيـات لأسـتـخـدام الأمـر .!**`);
        if (!member) return msg.channel.send('>  **ضـع أسـم أو أي دي الـمـخـالـف .**');
        if (!role === warn) return msg.channel.send('**>  مـنـشـن أحـد الـتـحـذيـرات .**');
        if (!pic) return msg.channel.send('>  **ضـع رابـط الـصـورة .**');
        if (!reason) return msg.channel.send('>  **ضـع سـبـب الـمـخـالـفـة .**');
        const memberInfo = msg.guild.member(member)
        memberInfo.roles.add(role).then (channel =>{
    {}    let ch = client.channels.cache.get('1153834492579041303');
         ch.send(`**الـمـخـالـف هـو : <@${member.use.id}> **`) 

          ch.send(
            new Discord.MessageEmbed()
            .setTitle("|  لـقـد تـم تـحـذيـرك لـمـخـالـفـتـك الـقـوانـيـن : -")
        .setThumbnail("https://cdn.discordapp.com/icons/694998268865937469/a_c5c0b313f32f8b4f08cb11819f1743c3.gif?size=1024")
            .addField("تـم أعـطـائـك تـحـذيـر :",`**${role}**`)
            .addField("أسـم الـمـخـالـف :",`** ${member} **`)
            .addField("أسـم الأداري :",`** ${msg.author.user.id} **`)
            .addField("سـبـب الـتـحـذيـر :",`**\`${reason}\`**`)
            .setImage(`${pic}`)
            .setFooter("|  When Every $hop Has Ban ; Hollywood $ Comes .!")
            .setTimestamp()
            .setColor("#ffa700")
          )
ch.send('خط') 
        });
      msg.channel.send(
            new Discord.MessageEmbed()
            .setColor("#ffa700")
            .setDescription(`> \`-\` **تـم أعـطـاء الـتـحـذيـر للـمـخـالـف ${member.username}**`)
        )
          }
});

//===============================================


client.on("message", async message =>{
    if(message.content.startsWith(prefix + "create")){
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`> ** أنـت لا تـمـتـلـك صـلاحـيـات لأسـتـخـدام الأمـر .!**`);
      const catgory = "1243118103412346942"; //اي دي كاتقوري الي تسوي فيه رومات
      let ors = message.guild.roles.cache.find(role => role.name === 'hlyS'); // اي دي رتبة default
      let eve = message.guild.roles.cache.find(role => role.name === '@everyone'); // اي دي رتبة مصمم 
      let des = message.guild.roles.cache.find(role => role.name === '✦ ›› Designer S'); // اي دي رتبة الي تجيك لما تثبت نفسك
      let ano = message.guild.roles.cache.find(role => role.name === '✦ ›› Normal S'); // اي دي رتبة elite
      let hi = message.guild.roles.cache.find(role => role.name === '✦ ›› Trusted S'); // اي دي رتبة special
      let edg = message.guild.roles.cache.find(role => role.name === '✦ ›› Epic S'); // اي دي رتبة devil s
      let el = message.guild.roles.cache.find(role => role.name === '✦›› Legendary S'); // اي دي رتبة trust
      let ul = message.guild.roles.cache.find(role => role.name === '✦ ›› Developer S'); // اي دي رتبة se
      let et = message.guild.roles.cache.find(role => role.name === '✦ ›› Special S');// اي دي رتبة staff
      let oo = message.guild.roles.cache.find(role => role.name === '✦ ›› Private S');// اي دي رتبة staff
      let od = message.guild.roles.cache.find(role => role.name === '✦ ›› Temp S');// اي دي رتبة staff

      var ch9 = message.guild.channels.cache.find(channel => channel.name === "〢∿・vip-s");
      if(ch9) return message.reply("**الـرومـات مـوجـودة**");
      var ch8 = message.guild.channels.cache.find(channel => channel.name === "〢∿・أخرى");
      if(ch8) return message.reply("**الـرومـات مـوجـودة**");
      var ch7 = message.guild.channels.cache.find(channel => channel.name === "〢∿・طرق");
      if(ch7) return message.reply("**الـرومـات مـوجـودة**");
      var ch6 = message.guild.channels.cache.find(channel => channel.name === "〢∿・عملات");
      if(ch6) return message.reply("**الـرومـات مـوجـودة**");
      var ch5 = message.guild.channels.cache.find(channel => channel.name === "〢∿・تصاميم");
      if(ch5) return message.reply("**الـرومـات مـوجـودة**");
      var ch4 = message.guild.channels.cache.find(channel => channel.name === "〢∿・العاب");
      if(ch4) return message.reply("**الـرومـات مـوجـودة**");
      var ch3 = message.guild.channels.cache.find(channel => channel.name === "〢∿・حسابات");
      if(ch3) return message.reply("**الـرومـات مـوجـودة**");
      var ch2 = message.guild.channels.cache.find(channel => channel.name === "〢∿・ديسكورد");
      if(ch2) return message.reply("**الـرومـات مـوجـودة**");
      var ch1 = message.guild.channels.cache.find(channel => channel.name === "〢∿・برمجيات");
      if(ch1) return message.reply("**الـرومـات مـوجـودة**");


 

      await message.guild.channels.create('〢∿・vip-s', { type :'text', parent: catgory, permissionOverwrites : [
            { id: eve,deny:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
           { id: ors,deny:['SEND_MESSAGES', 'ADD_REACTIONS'], allow:'VIEW_CHANNEL',},        
        { id: el,deny:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
       { id: el,deny:['SEND_MESSAGES', 'ADD_REACTIONS'], allow:'VIEW_CHANNEL',},
       { id: od,deny:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: hi,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
         { id: ano,deny:['ADD_REACTIONS','VIEW_CHANNEL','SEND_MESSAGES'],},
      ], });
      
       await message.guild.channels.create('〢∿・برمجيات', { type :'text', parent: catgory, permissionOverwrites : [
          { id: eve,deny:['SEND_MESSAGES', 'VIEW_CHANNEL'],},    
       { id: ul,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: edg,deny:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
         { id: ano,deny:['ADD_REACTIONS','VIEW_CHANNEL','SEND_MESSAGES'],},
             { id: ors,deny:['SEND_MESSAGES', 'ADD_REACTIONS'], allow:'VIEW_CHANNEL',},   
        { id: el,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
         { id: od,deny:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
         { id: hi,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
        { id: et,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
      ], });

      await  message.guild.channels.create('〢∿・تصاميم', { type :'text', parent : catgory, permissionOverwrites : [
              { id: eve,deny:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
        { id: el,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
         { id: ano,deny:['ADD_REACTIONS','VIEW_CHANNEL','SEND_MESSAGES'],},
         { id: edg,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
             { id: ors,deny:['SEND_MESSAGES', 'ADD_REACTIONS'], allow:'VIEW_CHANNEL',},   
       { id: des,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
         { id: od,deny:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
         { id: hi,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
         { id: et,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
      ], });

      await message.guild.channels.create('〢∿・ديسكورد', { type :'text', parent : catgory, permissionOverwrites : [
        { id: et,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
        { id: eve,deny:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
       { id: ors,deny:['SEND_MESSAGES', 'ADD_REACTIONS'], allow:'VIEW_CHANNEL',},
         { id: ano,deny:['ADD_REACTIONS','MENTION_EVERYONE'], allow:['VIEW_CHANNEL','SEND_MESSAGES','ATTACH_FILES']},
         { id: edg,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
         { id: od,allow:['SEND_MESSAGES', 'VIEW_CHANNEL'],deny:['MENTION_EVERYONE','ATTACH_FILES'],},
         { id: hi,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
        { id: el,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       
      ], });
      
      await message.guild.channels.create('〢∿・حسابات', { type :'text', parent : catgory, permissionOverwrites : [
        { id: et,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
        { id: eve,deny:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
       { id: ors,deny:['SEND_MESSAGES', 'ADD_REACTIONS'], allow:'VIEW_CHANNEL',},
         { id: ano,deny:['ADD_REACTIONS','MENTION_EVERYONE'], allow:['VIEW_CHANNEL','SEND_MESSAGES','ATTACH_FILES']},
         { id: edg,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
        { id: el,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},   
         { id: od,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','ATTACH_FILES'],deny:['MENTION_EVERYONE',],},
         { id: hi,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
      ], });
      
     await message.guild.channels.create('〢∿・العاب', { type :'text', parent : catgory, permissionOverwrites : [
       { id: et,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: eve,deny:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
       { id: ors,deny:['SEND_MESSAGES', 'ADD_REACTIONS'], allow:'VIEW_CHANNEL',},
        { id: ano,deny:['ADD_REACTIONS','MENTION_EVERYONE'], allow:['VIEW_CHANNEL','SEND_MESSAGES','ATTACH_FILES']},
        { id: edg,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
        { id: od,allow:['SEND_MESSAGES', 'VIEW_CHANNEL'],deny:['MENTION_EVERYONE','ATTACH_FILES'],},
        { id: hi,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: el,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},   
      ], });

     await message.guild.channels.create('〢∿・عملات', { type :'text', parent : catgory, permissionOverwrites : [
       { id: et,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: eve,deny:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
       { id: ors,deny:['SEND_MESSAGES', 'ADD_REACTIONS'], allow:'VIEW_CHANNEL',},
        { id: ano,deny:['ADD_REACTIONS','MENTION_EVERYONE'], allow:['VIEW_CHANNEL','SEND_MESSAGES','ATTACH_FILES']},
        { id: edg,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
        { id: od,allow:['SEND_MESSAGES', 'VIEW_CHANNEL'],deny:['MENTION_EVERYONE','ATTACH_FILES'],},
        { id: hi,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: el,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
      ], });

     await message.guild.channels.create('〢∿・طرق', { type :'text', parent : catgory, permissionOverwrites : [
       { id: et,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: eve,deny:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
       { id: ors,deny:['SEND_MESSAGES', 'ADD_REACTIONS'], allow:'VIEW_CHANNEL',},
        { id: ano,deny:['ADD_REACTIONS','MENTION_EVERYONE'], allow:['VIEW_CHANNEL','SEND_MESSAGES','ATTACH_FILES']},
        { id: edg,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
        { id: od,allow:['SEND_MESSAGES', 'VIEW_CHANNEL'],deny:['MENTION_EVERYONE','ATTACH_FILES'],},
        { id: hi,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: el,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
      ], });

     await  message.guild.channels.create('〢∿・أخرى', { type :'text', parent : catgory, permissionOverwrites : [
       { id: et,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: eve,deny:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
       { id: ors,deny:['SEND_MESSAGES', 'ADD_REACTIONS'], allow:'VIEW_CHANNEL',},
        { id: ano,deny:['ADD_REACTIONS','MENTION_EVERYONE'], allow:['VIEW_CHANNEL','SEND_MESSAGES','ATTACH_FILES']},
        { id: edg,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
        { id: od,allow:['SEND_MESSAGES', 'VIEW_CHANNEL'],deny:['MENTION_EVERYONE','ATTACH_FILES'],},
        { id: hi,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: el,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},  
      ], });
      
     let ti = client.channels.cache.get('1243118161017180212');
       ti.send(
            new Discord.MessageEmbed()
            .setTitle(`> \`-\` **تـم أرجـاع رومـات الـبـيـ$ـع ، الـنـشـر مـفـتـوح .**`)
            .setFooter("|  When Every $hop Has Ban ; Hollywood $ Comes .!")
            .setTimestamp()
            .setColor("#ffa700")
          )
      ti.send("**› || @here || .**")
     message.reply("**تـم أنـشـاء الـرومـات .**")
    }
});


client.on("message", async message=>{
    if(message.content.startsWith(prefix + "delete")){
     if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`> ** أنـت لا تـمـتـلـك صـلاحـيـات لأسـتـخـدام الأمـر .!**`);
      var cha9 = message.guild.channels.cache.find(channel => channel.name === "〢∿・أخرى");
       if(cha9) {  await cha9.delete(); }
      var cha8 = message.guild.channels.cache.find(channel => channel.name === "〢∿・طرق");
       if(cha8) {  await cha8.delete(); }
      var cha7 = message.guild.channels.cache.find(channel => channel.name === "〢∿・عملات");
       if(cha7) {  await cha7.delete(); }
      var cha6 = message.guild.channels.cache.find(channel => channel.name === "〢∿・تصاميم");
       if(cha6) {  await cha6.delete(); }
      var cha5 = message.guild.channels.cache.find(channel => channel.name === "〢∿・العاب");
       if(cha5) {  await cha5.delete(); }
      var cha4 = message.guild.channels.cache.find(channel => channel.name === "〢∿・حسابات");
       if(cha4) {  await cha4.delete(); }
      var cha3 = message.guild.channels.cache.find(channel => channel.name === "〢∿・ديسكورد");
       if(cha3) {  await cha3.delete(); }
      var cha2 = message.guild.channels.cache.find(channel => channel.name === "〢∿・برمجيات");
       if(cha2) {  await cha2.delete(); }
      var cha1 = message.guild.channels.cache.find(channel => channel.name === "〢∿・vip-s");
       if(cha1) {  await cha1.delete(); }


     let ti = client.channels.cache.get('1243118161017180212');

      ti.send(
            new Discord.MessageEmbed()
            .setTitle(`> \`-\` ** تـم مـسـح رومـات الـبـيـ$ـع ، الـنـشـر مـقـفـول .**`)
            .setFooter("|  When Every $hop Has Ban ; Hollywood $ Comes .!")
            .setTimestamp()
            .setColor("#ffa700")
          )
      message.reply("**تـم حـذف الـرومـات .**")
    }
});




/*
//
client.on("message" , async message => {
  const args = msg.content.split(' ');
  const role = message.guild.roles.cache.find(r=>r.name == "BlackList")//لازم تسوي رتبة باسم Blacklist
  if(message.content.startsWith(prefix + "blacklist") || message.content.startsWith(prefix + "bl")) {
  if(!message.member.hasPermission("ADMINISTRATOR")) return; 
    const user = message.mentions.members.first() ||
                 message.guild.members.cache.find(member => member.user.tag == args[1]) ||
                 message.guild.members.cache.find(member => member.user.username == args[1]) ||
                 message.guild.members.cache.find(member => member.user.id == args[1]);
    if(!user) return message.reply(
      new Discord.MessageEmbed()
            .setColor(`#1a1a1a`)
            .setDescription(`> \`-\` **ضـع أي دي أو مـنـشـن الـشـخـص .**`)
              )
    if(user.bot) return message.reply(
      new Discord.MessageEmbed()
            .setColor(`#1a1a1a`)
            .setDescription(`> \`-\` **لا يـمـكـن أضـافـة بـوت لـقـائـمـة الـبـلاك لـسـت .**`)
              )
    let member = message.author;
    if(user == member) return message.reply(
      new Discord.MessageEmbed()
            .setColor(`#1a1a1a`)
            .setDescription(`> \`-\` **لا تـسـتـطـيـع أضـافـة نـفـسـك لـقـائـمـة الـبـلاك لـسـت .**`)
              );
    const reason = args[2];
    if(!reason) return message.reply(
new Discord.MessageEmbed()
            .setColor(`#1a1a1a`)
            .setDescription(`> \`-\` **ضـع سـبـب للـبـلاك لـسـت .**`)
              );
    if(db.has(`userid_${user.id}`,`reason_${user.id}`)) return message.reply(new Discord.MessageEmbed()
                                                                          .setColor(`#1a1a1a`)
                                                                               .setDescription(`> \`-\` **هـذا الـشـخـص مـوجـود فـي قـائـمـة الـبـلاك لـسـت بـالـفـعـل .**`) 
                                                                            );                                            
    db.set(`userid_${user.id}`, user.id)
    db.set(`reason_${user.id}`, reason)
    if(!role) return message.reply(
      new Discord.MessageEmbed()
            .setColor(`#1a1a1a`)
            .setDescription(`> \`-\` **لا أسـتـطـيـع أيـجـاد رتـبـة الـبـلاك لـسـت .**`)
              )
    user.roles.add(role);
        message.reply(
            new Discord.MessageEmbed()
            .setColor(`#1a1a1a`)
            .setDescription(`> \`-\` **تـم أضـافـة <@${user}> ✅ .**`)
        )
  }
});*/







client.on('message', msg => {
if(msg.content.startsWith('فرع')) {
msg.channel.send(":https://discord.gg/hly")
}
});

client.on('message', msg => {
if(msg.content.startsWith('فرع')) {
msg.channel.send(":https://discord.gg/3ECWeq7Zcp")
}
});
//===============================================



client.on('message', msg => {
if(msg.content.startsWith('تحديث')) {
msg.channel.send("https://images-ext-2.discordapp.net/external/g40h6Rg5tf2AEqrMOCqKLXoYBQCYAlDHU2VyU_qNBAA/https/i8.ae/QhtXI")
}
});

client.on('message', say=> {

  if (say.content.startsWith(`شعار`)) {

    say.reply(`__**الشعارات الوحيدة هوليود هي :**__
↬ **Hollywood**
↬ **HlY**`)

  }

});

  const days = Math.floor(client.uptime / 86400000);
    const hours = Math.floor(client.uptime / 3600000) % 24;
    const minutes = Math.floor(client.uptime / 60000) % 60;
    const seconds = Math.floor(client.uptime / 1000) % 60;




client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "come")) {
    if (message.author.bot) return
    if (!message.member.roles.cache.has('1160584326795247686')) // ايدي الرتبة الي تقدر تستعمل الامر
      if (!message.member.hasPermission('ADMINISTRATOR')) return
    let user = message.mentions.members.first()
    if (!user) return message.reply(`**Usage: \`${prefix}come\` @user**`)
    user.send(`**Please Come To <#${message.channel.id}> \nFor ${user}**`)
    let embed = new Discord.MessageEmbed().setColor("GREEN").setDescription(`**✅ Done Send To ${user}**`).setFooter(message.author.tag, message.author.displayAvatarURL({
      dynamic: true
    }))
    message.channel.send(embed)
  }
})

let devs = ["768272443549941760", "826206977612578837"]
client.on("message", message => {
  if (message.author.bot || !message.guild) return;
  if (!devs.includes(message.author.id)) return;
  if (message.content.startsWith(prefix + "setavatar")) {
    let newavatar = message.content.split(" ")[1]
    if (!newavatar) return message.channel.send("type link of pic")
    client.user.setAvatar(newavatar).then(c => {
      return message.channel.send("done")
    }).catch(err => {
      return message.channel.send(`err : put correct image link`)
    })
  }
  else if (message.content.startsWith(prefix + "setname")) {
    let newname = message.content.split(" ").slice(1).join(" ")
    if (!newname) return message.channel.send("type name")
    client.user.setUsername(newname).then(c => {
      return message.channel.send("done")
    }).catch(err => {
      return message.channel.send(`err : ${err.message}`)
    })
  }
})

//===================================================
client.login(process.env.token);


const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`t : `)
});

app.listen(3000, () => {
  console.log('server started');
});