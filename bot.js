const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
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
client.login('process.env.BOT_TOKEN');
