let handler = async (m, { conn }) => {
  const texto = `
🍭⊹ 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐠𝐚𝐜𝐡𝐚 𝐩𝐚𝐫𝐚 𝐜𝐨𝐥𝐞𝐜𝐜𝐢𝐨𝐧𝐚𝐫 𝐭𝐮𝐬 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐬 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐨𝐬 ⊹🍭

𑁯 *#rw* • *#rollwaifu*
> ✦ Invoca a un personaje aleatorio.

𑁯 *#c* • *#claim*
> ✦ Reclama a tu personaje invocado.

𑁯 *#vote*
> ✦ Sube el valor de tu personaje favorito. 

𑁯 *#addrw*
> ✦ Pide que añadan un personaje nuevo.

𑁯 *#harem*
> ✦ Revisa tus personajes reclamados.

𑁯 *#wimage* • *#charimage*
> ✦ Muestra una imagen aleatoria.

𑁯 *#topwaifus*
> ✦ Lista de personajes más valiosos.

𑁯 *#winfo*
> ✦ Información sobre un personaje.

𑁯 *#regalar* • *#givewaifu*
> ✦ Regala un personaje a otro usuario.
`.trim();

  await conn.sendMessage(m.chat, {
    image: { url: 'https://files.catbox.moe/tfxlnk.png' },
    caption: texto,
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: '💥 Comandos gacha para reclamar tus personajes favoritos',
        body: 'Reclama, regala y sube de nivel tus personajes preferidos',
        thumbnailUrl: 'https://files.catbox.moe/3pw7bx.jpg',
        mediaType: 1,
        renderLargerThumbnail: false,
        showAdAttribution: true,
        mediaUrl: 'https://whatsapp.com/channel/0029VakLbM76mYPPFL0IFI3P',
        sourceUrl: 'https://whatsapp.com/channel/0029VakLbM76mYPPFL0IFI3P'
      }
    }
  }, { quoted: m });
};

handler.command = ['menugacha', 'gachamenu', 'gacha'];
export default handler;