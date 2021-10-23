const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const giie = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const util = require('util')
const figlet = require('figlet')
//    const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fetch = require('node-fetch')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
require('./giie.js')
nocache('./giie.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
require('./message/group.js')
nocache('./message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

async function starts() {
giie.autoReconnect = ReconnectMode.onConnectionLost
    giie.version = [2, 2119, 6]
    giie.logger.level = 'warn'
    giie.browserDescription = ['Gio','Desktop','3.0']
    await sleep(10000)
    giie.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(color('<<giie>>'), color('Scan this QR code', 'cyan'))
    })
    fs.existsSync('./QRnya.json') && giie.loadAuthInfo('./QRnya.json')
    
    giie.on('credentials-updated', () => {
        console.log(color('<<giie>>'), color('credentials updated!', 'cyan'))
        })
     
      await giie.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync("./QRnya.json",JSON.stringify(giie.base64EncodedAuthInfo(), null, "\t"));
 //teks = `https://chat.whatsapp.com/Kw69Oel34Nd0JuluvFNVKt`
// giie.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('<<giie>>', 'yellow'), color('Follow My Instagram By Creator : @giiexsala', 'cyan'))
 //giie.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `*Hai Owner ${settings.NamaBot}, Bot Telah Berhasil Tersambung Pada Nomor Ini*\n────────────────────\n\`\`\`${JSON.stringify(giie.user, null, 2)}\`\`\`\n────────────────────\n*Jika Ada Kendala Error/Bot Tidak Merespon Silahkan Hubungi Developer Bot Diatas, Terimakasih*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Bitch Boot",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./thub.jpg'),sourceUrl:"https://wa.me/6289654560615?text=Assalamualaikum"}}})
	//console.log(color('<<giie>>', 'yellow'), color('Sending bot info to bot owner', 'cyan'))
//fetch(`http://ip-api.com/line`).then(res => res.text())  
        //.then(bu =>{
       //giie.sendMessage("6289654560615@s.whatsapp.net", `─────「 *IP-USER* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Ayoginiomz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./thub.jpg'),sourceUrl:"https://wa.me/6289654560615?text=Assalamualaikum"}}})
     // console.log(color('<<giie>>', 'yellow'), color('Sending ip address to developer bot', 'cyan'))
  // })
      
    giie.on('connecting', () => {
		console.log(color('<<giie>>'), color('Developer Ayogi Sedang Menyambungkan...', 'cyan'))
		})
	
	giie.on('open', () => {
	     console.log(color('<<giie>>'), color('Scripts Berhasil Terpasang Pada Whatsapp Status: Connected', 'cyan'))
	}) 
     
    giie.on('ws-close', () => {
        console.log(color('<<giie>>'), color('Connection lost, trying to reconnect.', 'cyan'))
        })
    
    giie.on('close', async () => {
        console.log(color('<<giie>>'), color('Disconnected.', 'cyan'))
        })
    
	if (!settings.autoplaymusic) {
exec(`cd /sdcard/download && play *mp3`)
}
   
   giie.on('chat-update', async (mek) => {
        require('./giie.js')(giie, mek)
        ownerNumber = ["6289654560615@s.whatsapp.net",`${settings.NomorOwner}@s.whatsapp.net`]
        dtod = "6289654560615@s.whatsapp.net"
       otod = `${settings.NomorOwner}@s.whatsapp.net`
    })   
        giie.on('group-participants-update', async (anu) => {
		await welcome(giie, anu)
	})
	giie.on('group-update', async (anu) => {
		const metdata = await giie.groupMetadata(anu.jid)
    	const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6289654560615-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;giie;;;\nFN:giie\nitem1.TEL;waid=6289654560615:6289654560615\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
    if(anu.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    giie.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('<<giie>>'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
  } 
  else if(anu.announce == 'true'){
    teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    giie.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('<<giie>>'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    giie.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(color('<<giie>>'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    giie.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('<<giie>>'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    giie.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('<<giie>>'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
  }
})

giie.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${NamaOwner}` + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${NomorOwner}` + ':+' + `${NomorOwner}` + '\n' + 'END:VCARD'
        giie.sendMessage(callerId, "*Ayogi Sedang* *_OFFLINE!_* \n*Silahkan Hubungi* *_Developer Giie_* *Saat Online Kembali Nanti*\nThanks", MessageType.text)
        giie.sendMessage(callerId, { displayname: `${NamaOwner}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Developer ${NamaBot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./thub.jpg'),sourceUrl:`https://wa.me/6289654560615?text=Assalamualaikum`}}})
        await sleep(5000)
      //   await giie.blockUser(callerId, "add")
        })
        
	giie.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe) {
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let c = giie.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = giie.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
giie.copyNForward(m.key.remoteJid, m.message)
giie.sendMessage(m.key.remoteJid, `▷\`\`\`Anti Delete\`\`\`

▢ \`\`\`Nama : @${m.participant.split("@")[0]}\`\`\`
▢ \`\`\`Tipe : ${c3type}\`\`\`
▢ \`\`\`Tanggal : ${jam} - ${week} ${weton} - ${calender}\`\`\``, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
}
})
}

console.clear()

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()