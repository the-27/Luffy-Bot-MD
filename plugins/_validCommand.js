export async function before(m, { conn }) {
  if (!m.text || !global.prefix.test(m.text)) return;

  const usedPrefix = global.prefix.exec(m.text)[0];
  const command = m.text.slice(usedPrefix.length).trim().split(' ')[0].toLowerCase();

  if (!command) return;
  if (command === "bot") return;

  const isValidCommand = (command, plugins) => {
    for (let plugin of Object.values(plugins)) {
      const cmdList = Array.isArray(plugin.command) ? plugin.command : [plugin.command];
      if (cmdList.includes(command)) return true;
    }
    return false;
  };

  if (isValidCommand(command, global.plugins)) {
    let chat = global.db.data.chats[m.chat];
    let user = global.db.data.users[m.sender];

    if (chat?.isBanned) {
      const avisoDesactivado = `《✦》𝑬𝒍 𝑩𝒐𝒕 *${bot}* 𝒆𝒔𝒕𝒂 𝒅𝒆𝒔𝒂𝒄𝒕𝒊𝒗𝒂𝒅𝒐 𝒆𝒏 𝒆𝒔𝒕𝒆 𝒈𝒓𝒖𝒑𝒐.

> 🧠 𝑺𝒊𝒏 𝒆𝒍 𝒔𝒊𝒔𝒕𝒆𝒎𝒂 𝒂𝒄𝒕𝒊𝒗𝒐, 𝒏𝒐 𝒉𝒂𝒚 𝒋𝒖𝒆𝒈𝒐 𝒒𝒖𝒆 𝒑𝒖𝒆𝒅𝒂𝒔 𝒈𝒂𝒏𝒂𝒓.

> 🎄 𝑼𝒏 *𝒂𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒓* 𝒅𝒆𝒃𝒆 𝒂𝒄𝒕𝒊𝒗𝒂𝒓𝒍𝒐 𝒖𝒔𝒂𝒏𝒅𝒐:

> » *${usedPrefix}bot on*`;
      await m.reply(avisoDesactivado);
      return;
    }

    if (!user.commands) user.commands = 0;
    user.commands += 1;

  } else {

    await conn.sendMessage(m.chat, {
      text: `╭─〔 ⛔ COMANDO NO ENCONTRADO 〕─╮  
│ El comando *"${comando}"* no forma parte del sistema.  
│  
│ 📌 No estás listo si ni siquiera sabes qué escribir.  
│  
│ 🧭 Consulta *#menu* y estudia tus opciones.  
│  
│ No hay éxito sin disciplina.  
╰──────────────────────────╯`,
      footer: '⚡ Rin Itoshi ┇ BOT MD ┇ 「𝘍𝘰𝘤𝘶𝘴. 𝘋𝘪𝘴𝘤𝘪𝘱𝘭𝘪𝘯𝘦. 𝘞𝘪𝘯.」',
      buttons: [
        {
          buttonId: '.menu',
          buttonText: { displayText: '📜 Ver menu de comandos 📜' },
          type: 1
        }
      ],
      headerType: 1
    }, { quoted: m });
  }
}