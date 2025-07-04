import speed from 'performance-now'
import { exec } from 'child_process'

let handler = async (m, { conn }) => {
  let timestamp = speed();
  let latensi = speed() - timestamp;

  exec(`neofetch --stdout`, (error, stdout, stderr) => {
    let sysinfo = stdout?.toString("utf-8").replace(/Memory:/, "Ram:");

    const ping = `╭━━〔 🧬 𝗥𝗜𝗡 𝗜𝗧𝗢𝗦𝗛𝗜 🧠 〕━━⬣
┃
┃ 🧩 *Estado:* Sistema operativo funcional.
┃ 🧠 *Análisis:* ${latensi.toFixed(4)} ms
┃ 🧪 *Datos técnicos:*
┃ ${infoLines}    
╰━━━━━━━━━━━━━━━━⬣`;

    conn.reply(m.chat, ping.trim(), fkontak, rcanal);
  });
}

const rcanal = {
  contextInfo: { 
    isForwarded: true, 
    serverMessageId: 100,
    externalAdReply: {
      showAdAttribution: true,
      title: packname, 
      body: dev, 
      mediaUrl: null, 
      description: null, 
      previewType: "PHOTO", 
      thumbnailUrl: icono, 
      sourceUrl: redes, 
      mediaType: 1, 
      renderLargerThumbnail: true
    }
  }
}

handler.help = ['ping']
handler.tags = ['info']
handler.command = ['ping', 'p']
handler.register = true

export default handler



import speed from 'performance-now'
import { exec } from 'child_process'

let handler = async (m, { conn }) => {
  let timestamp = speed();
  let latensi = speed() - timestamp;

  exec(`neofetch --stdout`, (error, stdout, stderr) => {
    let sysinfo = stdout?.toString("utf-8").replace(/Memory:/, "Ram:");
    let infoLines = sysinfo ? sysinfo.trim().split('\n').map(line => `┃ ${line}`).join('\n');

    const ping = `╭━━〔 🧬 𝗥𝗜𝗡 𝗜𝗧𝗢𝗦𝗛𝗜 🧠 〕━━⬣
┃
┃ 🧩 *Estado:* Sistema operativo funcional.
┃ 🧠 *Análisis:* ${latensi.toFixed(4)} ms
┃ 🧪 *Datos técnicos:*
${infoLines}
╰━━━━━━━━━━━━━━━━⬣`;

    conn.reply(m.chat, ping.trim(), null, rcanal);
  });
}

const rcanal = {
  contextInfo: { 
    isForwarded: true, 
    serverMessageId: 100,
    externalAdReply: {
      showAdAttribution: true,
      title: packname, 
      body: dev, 
      mediaUrl: null, 
      description: null, 
      previewType: "PHOTO", 
      thumbnailUrl: icono, 
      sourceUrl: redes, 
      mediaType: 1, 
      renderLargerThumbnail: true
    }
  }
}

handler.help = ['ping']
handler.tags = ['info']
handler.command = ['ping', 'p']
handler.register = true

export default handler