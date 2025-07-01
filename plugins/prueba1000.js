import fetch from 'node-fetch';

let handler = async (m, { conn, text, command }) => {
  if (!text) return m.reply('🎨 Ejemplo: *.luffy luffy y pikachu*');

  const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(text)}`;

  m.reply('🎨 Generando imagen, espera unos segundos...');

  try {
    await conn.sendMessage(m.chat, {
      image: { url },
      caption: `🖼️ Imagen generada de: *${text}*`,
      footer: '¿Quieres otra imagen parecida?',
      buttons: [
        { buttonId: `.temu ${text}`, buttonText: { displayText: '🔁 Generar otra' }, type: 1 }
      ],
      headerType: 4
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply('❌ Ocurrió un error al generar la imagen. Intenta de nuevo.');
  }
};

handler.command = ['temu'];
handler.help = ['temu <texto>'];
handler.tags = ['ia', 'imagen', 'temu'];

export default handler;