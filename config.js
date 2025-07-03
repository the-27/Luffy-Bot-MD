import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = '' //Ejemplo: 573218138672

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
// <-- Número @s.whatsapp.net -->
  ['51969214380', '🎄 Propietario', true],
  ['51994114690', 'creador 2 🌛', true],
  ['51919199620', 'creador 3 ☄️', true],
  ['51988013368'],
  ['527721892735'],
  
// <-- Número @lid -->
  ['193196806148194', '🎄 Propietario', true],
  ['193196806148194', 'creador 2 🌛', true],
  ['193196806148194', 'creador 3 ☄️', true]
];

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = ['51969214380']
global.suittag = ['51969214380'] 
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.17' 
global.vs = '2.2.5'
global.nameqr = 'luffy bot'
global.namebot = 'Luffy bot MD 💥'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.luffyJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '🎄  𝒍𝒖𝒇𝒇𝒚 𝒃𝒐𝒕 𝑴𝑫  🎋'
global.botname = '✦⃟⛧ _𝑳𝑼𝑭𝑭𝒀⛧ 𝑩𝑶𝑻 𝑴𝑫_ 🤖┋⃟✧'
global.wm = '◟ＬＵＦＦＹ ＢＯＴ ＭＤ◞'
global.author = 'mᥲძᥱ ᑲᥡ : 🌈ᵀ͢ᴴᴱ𝄟⏤͟͟͞͞⃝Black'
global.dev = '୧ㅤミ★ 》 Tʜᴇ Bʟᴀᴄᴋ 𝘰𝘧𝘤《★彡 🎋'
global.bot = 'LUFFY BOT'
global.textbot = '𝕃𝕌𝔽𝔽𝕐 𝔹𝕆𝕋 𝕏 𝔹𝕃𝔸ℂ𝕂'
global.etiqueta = '@ʙʟᴀᴄᴋ.ᴏғᴄ'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.moneda = 'coins'
global.welcom1 = '🥥 𝐄ძі𝗍ᥲ ᥱᥣ ᥕᥱᥣᥴ᥆mᥱ ᥴ᥆ᥒ #sᥱ𝗍ᥕᥱᥣᥴ᥆mᥱ'
global.welcom2 = '🌿 𝐄ძі𝗍ᥲ ᥱᥣ ᥕᥱᥣᥴ᥆mᥱ ᥴ᥆ᥒ #sᥱ𝗍ᑲᥡᥱ'
global.banner = 'https://files.catbox.moe/gydb1l.jpg'
global.avatar = 'https://files.catbox.moe/rrkbwi.jpg'
global.logo = 'https://files.catbox.moe/bzwvsg.jpg'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.gp1 = 'https://whatsapp.com/channel/0029VbAtbPA84OmJSLiHis2U'
global.comunidad1 = 'https://whatsapp.com/channel/0029VbAtbPA84OmJSLiHis2U'
global.channel = 'https://whatsapp.com/channel/0029VbAtbPA84OmJSLiHis2U'
global.channel2 = 'https://whatsapp.com/channel/0029VbAtbPA84OmJSLiHis2U'
global.md = 'https://github.com/the-27/Luffy-Bot-MD'
global.correo = 'blackoficial2025@gmail.com'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363401008003732@newsletter',
}
global.multiplier = 60

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
