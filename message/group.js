const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")
const moment = require("moment-timezone")

const { getBuffer } = require('../lib/myfunc')
const { color, bgcolor } = require('../lib/color')

let setting = JSON.parse(fs.readFileSync('./settings.json'))
prefix = setting.prefix

module.exports = welcome = async (giie, anu) => {
	    const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
	    const isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
                pp_user = await giie.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
                try {
                pp_grup = await giie.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://i.postimg.cc/SN54m6LW/SAVE-20210728-133334.jpg'
            }
            if (anu.action == 'add' && mem.includes(giie.user.jid)) {
            giie.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot Ketik ${prefix}menu', 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(giie.user.jid)) {
             if (!welkom.includes(anu.jid)) return
                mdata = await giie.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
                let v = giie.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_wel = moment.tz('Asia/Jakarta').format("HH:mm")
                teks = `Halo Pendatang baru\n${anu_user} \nINTRO DULULAH BIAR KENAL\nNama : \nUmur :\nGender : \nAsal :\n\nSemoga Betah dan jangan lupa isi\nAnd Following Rules Group`
	            buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${time_wel}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://i.ibb.co/LRY5KTY/Portfolio-Archivi-Page-2-of-7-Federica-Iossa.jpg`)
                buttons = [{buttonId: `#creator`,buttonText:{displayText: 'SELAMAT DATANG'},type:1}]
                imageMsg = (await giie.prepareMessageMedia((buff), 'imageMessage', {thumbnail: buff})).imageMessage
                buttonsMessage = { contentText: `${teks}`, footerText: 'JANGAN BUAT ONAR BRO', imageMessage: imageMsg, buttons: buttons, headerType: 4 }
                prep = await giie.prepareMessageFromContent(mdata.id,{buttonsMessage},{})
                giie.relayWAMessage(prep)
}
            if (anu.action == 'remove' && !mem.includes(giie.user.jid)) {
            if (!welkom.includes(anu.jid)) return
                mdata = await giie.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = giie.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_wel = moment.tz('Asia/Jakarta').format("HH:mm")
                memeg = mdata.participants.length
                out = `Jangan Lupakan Kenangan kita\n${anu_user}\nSemoga kamu bahagia diluar sana`
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${time_wel}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://i.ibb.co/8gHPzt9/UR-Tsushima-Yoshiko-What-Do-I-Do-What-Do-I-Do-Angel-of-Eden-Cards-list-All-Stars-Idol-Story-Love-Liv.jpg`)
                buttons = [{buttonId: `#creator 1`,buttonText:{displayText: 'SELAMAT JALAN'},type:1}]
                imageMsg = (await giie.prepareMessageMedia((buff), 'imageMessage', {thumbnail: buff})).imageMessage
                buttonsMessage = { contentText: `${out}`, footerText: 'BALIK LAGI BELIKAN AYAM BAKAR', imageMessage: imageMsg, buttons: buttons, headerType: 4 }
                prep = await giie.prepareMessageFromContent(mdata.id,{buttonsMessage},{})
                giie.relayWAMessage(prep)
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}