let handler = async (m, { conn, usedPrefix }) => {
  let img = `https://files.catbox.moe/3gxuzq.jpg`;
  let txt = `╭ - - - - - - -✎ 🌹   ❜ ⊹
*︵₊˚꒰Ꮺ мαиυαℓ ραяα є∂ιταя τυ ρєяƒιℓ*
*꒰ ୨⚽୧─・┈・୨⚡୧・┈・─୨🥥୧ ꒱*
₊˚୨🍧 *${usedPrefix}setbirth* ✦ є∂ιτα τυ ƒєϲнα ∂є ϲυмρℓєαñοѕ 🎂.
₊˚୨💥 *${usedPrefix}delbirth* ✦ єℓιмιиα τυ ƒєϲнα ∂є ϲυмρℓєαñοѕ 🎂.
₊˚୨⚔️ *${usedPrefix}setdesc* ♡ є∂ιτα ℓα ∂єѕϲяιρϲιóи ∂є τυ ρєяƒιℓ.
₊˚୨🍁 *${usedPrefix}deldesc* ♡ єℓιмιиα ℓα ∂єѕϲяιρϲιóи ∂є τυ ρєяƒιℓ.
₊˚୨🌲 *${usedPrefix}ѕ_setgenre* ✐ є∂ιτα τυ géиєяο єи τυ ρєяƒιℓ.
₊˚୨🏜️ *${usedPrefix}delgenre* ✐ єℓιмιиα τυ géиєяο єи τυ ρєяƒιℓ.
₊˚୨❄️ *${usedPrefix}marry* ᰔᩚ ϲáѕατє ϲοи υиα ρєяѕοиα.
₊˚୨🦠 *${usedPrefix}divorse* ঔ ∂ινóяϲιατє ∂є υиα ρєяѕοиα.
╰───────────────⋆`;

  const buttons = [
    { 
      buttonId: `${usedPrefix}profile`,
      buttonText: { displayText: "🧙‍♂️ ⍴ᥱr𝖿іᥣ" }, type: 1
    },
    { 
      buttonId: `${usedPrefix}p`,
      buttonText: { displayText: "🎄 ⍴іᥒg" }, type: 1
    },
  ];
  
   const fkontak = {
    key: {
      participants: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      fromMe: false,
      id: "Halo"
    },
    message: {
      contactMessage: {
        displayName: "✦⃟⛧ ISAGI",
        vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;✦⃟⛧ ISAGI;;;\nFN:✦⃟⛧ ISAGI\nitem1.TEL;waid=1234567890:+12 3456-7890\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
      }
    },
    participant: "0@s.whatsapp.net"
  };
  

  await conn.sendMessage(m.chat, {
    image: { url: img },
    caption: txt,
    footer: "⭐ ʟᴜғғʏ ʙᴏᴛ ᴍᴅ ✨",
    buttons: buttons,
    viewOnce: true,
    contextInfo: { forwardingScore: 999, isForwarded: true, fkontak }
  }, { quoted: m });
  await m.react('👻');
};

handler.command = ['perfildates', 'pedates', 'perd'];
handler.tag = ['rg'];
handler.help = ['perfildates'];
handler.coin = 2;

export default handler;