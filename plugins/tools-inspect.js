import fetch from 'node-fetch'

const logo = `${global.logo}`;

let handler = async (m, { conn, text }) => {
  try {
    if (!text) {
      return conn.reply(m.chat, `🌷 Ejemplo de uso: .inspect https://whatsapp.com/channel/0029VbAtbPA84OmJSLiHis2U`, m);
    }

    if (!text.includes('https://whatsapp.com/channel/')) {
      return conn.reply(m.chat, `☄️ Ingresa un link válido.`, m);
    }

    let i = await getInfo(conn, text);
    if (!i) throw new Error('No se obtuvo información del canal.');

    await conn.sendMessage(m.chat, {
      text: i.inf,
      contextInfo: {
        externalAdReply: {
          title: 'Canal inspeccionado',
          body: '',
          mediaType: 1,
          previewType: 0,
          renderLargerThumbnail: true,
          thumbnail: await (await fetch(logo)).buffer(),
          sourceUrl: `https://whatsapp.com/channel/${i.id}`
        }
      }
    }, { quoted: m });

    await m.react("☑️");

  } catch (error) {
    console.error(error);
    await conn.reply(m.chat, `❌ Error al obtener la información del canal: ${error.message}`, m);
  }
}

handler.command = ["inspector", "inspect", "id"];
handler.help = ["inspect"];
handler.tags = ["tools"];
export default handler;

async function getInfo(conn, url) {
  const match = url.match(/https:\/\/whatsapp\.com\/channel\/([0-9A-Za-z]+)/i);
  if (!match) throw new Error("❗ Enlace de canal no válido.");

  const channelId = match[1];
  const info = await conn.query({
    tag: 'iq',
    attrs: {
      type: 'get',
      xmlns: 'w:newsletter',
      to: '@newsletter.whatsapp.net'
    },
    content: [{
      tag: 'newsletter',
      attrs: {
        id: channelId
      }
    }]
  });

  if (!info || !info.content) {
    throw new Error('No se pudo obtener METADATA del canal.');
  }

  const data = info.content.find(v => v.tag === 'newsletter');

  if (!data) {
    throw new Error('No se encontró información del canal.');
  }

  const fecha = new Date(Number(data.attrs.creation || 0) * 1000);
  const fechaFormato = fecha.toLocaleDateString("es-ES", { year: 'numeric', month: 'long', day: 'numeric' });

  let txt = `
◜ *Channel - Info* ◞

≡ 🌴 *Nombre:* ${data.attrs.name || 'Desconocido'}
≡ 🌿 *ID:* ${data.attrs.id || channelId}
≡ 🌾 *Estado:* ${data.attrs.state || 'Desconocido'}
≡ 📅 *Creado:* ${fechaFormato}

≡ 🗃️ *Enlace:* https://whatsapp.com/channel/${data.attrs.invite || channelId}

≡ 🍄 *Seguidores:* ${data.attrs.subscribers || 0}
≡ 🎍 *Verificación:* ${data.attrs.verified === 'true' ? "✅ Sí" : "❌ No"}

≡ 🌷 *Descripción:* 
${data.attrs.description || "Sin descripción"}
`.trim();

  return {
    id: channelId,
    inf: txt
  };
}