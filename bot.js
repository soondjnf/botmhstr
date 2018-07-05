const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', message => {
var prefix = "!";
const js = message.guild.channels.find("name","codes-js")
const code = message.content.split(' ').slice(1).join(' ');
const codeinfo = message.content.split(' ').slice(2).join(' ');
const edit = message.content.split('').slice(3). join('');
var by = message.author.id
const role = message.guild.member(message.author).roles.find('name', 'Support');
          if(!role)msg.reply('يجب ان يتوافر معك رتبه سبورت لكي تقوم بتنزيل الاكواد وشكرا')
if (message.content.startsWith(prefix + 'js')) {
if (!code) return message.reply('اكتب الكود الان').then(msg => {
setTimeout(() => {
if (!codeinfo) return msg.edit('اكتب وصف الكود الان').then(msg => {
setTimeout(() => {
msg.edit('تم تنزيل الكود بنجاح:white_check_mark:  ');
})
})
},5000);
});

if(!js) return;
if(js) {
js.send(\``js
${code}```
تم النشر باوسطة :
<@${by}>`);
 message.react(":white_check_mark:️")
 message.react(":x:")
}
}
});
client.login(process.env.BOT_TOKEN);
