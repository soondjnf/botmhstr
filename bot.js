const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', function(){
    var ms = 100000 ;
    var setGame = [`+help `,`PLAY IN BRG CLAN`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/KiNg66S`);
    }, ms);100000

});
client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
╭━━━┳╮╱╱╱╱╱╱╱ ╭━━╮╱╱╱╱╭╮
┃╭━╮┃┃╱╱╱╱╱╱╱ ┃╭╮┃╱╱╱╭╯╰╮
┃╰━╯┃┃╭╮╭┳━━╮ ┃╰╯╰┳━━╋╮╭╯
┃╭━━┫┃┃┃┃┃━━┫ ┃╭━╮┃╭╮┃┃┃
┃┃╱╱┃╰┫╰╯┣━━┃ ┃╰━╯┃╰╯┃┃╰╮
╰╯╱╱╰━┻━━┻━━╯ ╰━━━┻━━╯╰━╯
   

           General Commands
   
   『+id/ معلومات عن حسابك』
   『+2id / معلومات عن الحساب في صوره』
   『+embed/ يكرر كلامك بمبيد』
   『+sug/ الإقتراحات』
   『+roles/ يطلع الرتب』
   『+roles-n يعطيك الرتب بالترتيب』
   『+server/ معلومات عن السيرفر』
   『+image/ يعرض صوره السيرفر』
   『+avatar/ يعرض صورتك او صوره شخص』
   『+dt/يعرض لك الوقت والتاريخ واليوم 』
   『+invites/ يعرض كم ضياف 』
   『+topinvite/ لعرض قائمه فيها كل واحد ضاف كم 』
   『+zalgo / يزخرف لك شي تكتب لازم يكون انقليزي مو عربي』
   『+draw / يكرر الكلام في صوره』
   『+say / يكرر الكلام لتكتب』
   『+translate / يترجم』
   『+botserver / يحطيك سرفرات البوت بترتيب』
  
   
           Administrative Commands
   
 
   『+ct /انشاء روم كتابي』
   『+cv /انشاء روم صوتي』
   『+delet / مسح روم』
   『+clear / لمسح الشات』
   『+roles / لرؤيه رتب في سيرفر』
           Bot Commands
  
   『+ping/ يعرض لك سرعه اتصال البوت』
   『+uptime/ يعرض لك صار للبوت كم شغال』
   『+invite/ اضافه البوت』
   『+mb/ حاله الاعضاء』
   『+bot/ معلومات عن البوت』
   
              BC رسائل جماعيه
   『+bc1/❖ برودكاست + للكل + مطور 』
   『+bc2/❖ برودكاست + للكل + غير مطور』
   『+bc3/❖  برودكاست + للأونلاين + مع منشن + غير مطور』
   『+bc4/❖ برودكاست + للكل + مع منشن + غير مطور』


           Games Commands
    
   『+لعبه صراحه/صراحه』
   『+لعبه خواطر/خواطر 』
   『+يعطيك ذكر من الاذكار/ اذكار』
   『+يخيرك بين شي وشي / لو خيروك』
   『+يعطيك عقاب و لازم تنفذه/ عقاب』
   『+لعبه اسئله / كت』
   『+لعبة سرعة الكتابة/ سرعة』
   『+للعب لعبه فكك/ فكك』
   『+اسئلني』
 


           *profile Commands*

   『soon』

  BOT By: | @ᏴᏒᎶ♔↝ مهستر





`)
   message.author.sendEmbed(embed)
   
   }
   });  
client.on('message', message => {
     if (message.content === (prefix + "help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
    var prefix = "+"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
client.login('process.env.BOT_TOKEN');
