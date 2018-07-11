const Discord = require('discord.js');
const client = new Discord.Client();
let timer;
console.log("MHSTR FUCK YOU");

client.on("guildMemberAdd", member => {
    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [`..اقوى سيرفر اقاريو  
كلان رعب يعود بعد غياب طويل وبقوه 
https://discord.gg/ynMGTJ9
`]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})

client.login(process.env.BOT_TOKEN);
