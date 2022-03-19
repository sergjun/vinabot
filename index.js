const Discord = require("discord.js")
const client = new Discord.Client();
const VinaAlive = require("./server")

const balds = ["bolinha", "Bolinha", "Bolis", "bolis", "Guigas", "GuigasCardas", "guigas", "guidascardas", "cardas", "gabre", "Gabre", "Moraes", "moraes", "rocha", "Rocha", "tuza", "Tuzao", "tuzoff", "Tuzoff"]

const baldReply = ["ta calvo hein, pai" , ":person_bald:", "poca telha", "aeroporto de piolho", "ta calvo hein, pai :person_bald:", "oitenta anos e a cabeleira do pai nao caiu ainda", "amin khader", "ninho de aguia", ]

const marriages = ["casamento", "Casamento", "CASAMENTO", "marriage", "Marriage"]

const marriageReply = ["um dia minha estrela brilha", "juntar escovas não é casar"]

const bandsNirvana = ["Nirvana", "nirvana", "NIRVANA"]

const japanWord = ["anime", "Anime", "ANIME", "Japao", "Japão", "JAPÃO","japão", "japao", "manga", "MANGA", "Manga", "OST", "ENDING", "OPENING" ]

const nanatsuAnime = ["nanatsu", "Nanatsu", "NANATSU"]

const charlieBrow = ["charlie brown jr", "Charlie Brown Jr", "CBJR"]

const vinaOffenses = ["Vai tomar no cu Vina", "vai tomar no cu vina", "VAI TOMAR NO CU VINA"]

const vasco = ["vasco", "Vasco", "da gama", "gama"]

const cecilia = ["cecilia", "CECILIA", "Cecilia", "cecis", "CECIS"]

const calorClaudio = ["Gustavo Claudio", "Claudio", "Calor", "calor", "graus", "sol","solares", "Gulinho", "gulinho", "Gulo","gulo", "Camille", "camille", "kled","Kled"]

const salimzeraChang = ["Salim", "Salimzera", "Chang","salim"]

const serjoTomari = ["Serjo", "serginho", "Serginho", "sergio", "Sergio", "haku", "Haku", "Hakao"]

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (balds.some(bald => msg.content.includes(bald))){
    const baldOffense = baldReply[Math.floor(Math.random()* baldReply.length)]
      msg.reply(baldOffense)
  }
})

client.on("message", msg => {
  if (bandsNirvana.some(nirvana => msg.content.includes(nirvana))) {
    msg.reply("LIXANA!!!")
  }
})

client.on("message", msg => {
  if (marriages.some(marriage => msg.content.includes(marriage))){
    const marriageCry = marriageReply[Math.floor(Math.random()* marriageReply.length)]
    msg.reply(marriageCry)
  }
} )

client.on("message", msg => {
  if (japanWord.some(japan => msg.content.includes(japan))){
    msg.reply("duas bombas foi muitissimo pouco")
  }
})

client.on("message", msg => {
  if (nanatsuAnime.some(nanatsu => msg.content.includes(nanatsu))){
    msg.reply("RESPEITA")
  }
})

client.on("message", msg => {
  if (charlieBrow.some( choris => msg.content.includes(choris))){
    msg.reply ("foi tarde, lixao")
  }
})

client.on("message", msg => {
  if (vinaOffenses.some( vina => msg.content.includes(vina))){
    msg.reply ("vem comigo")
  }
})

client.on("message", msg => {
  if (vasco.some(vascao => msg.content.includes(vascao)))
    msg.reply ("VASCO")
})

client.on("message", msg => {
  if (cecilia.some(cec => msg.content.includes(cec)))
    msg.reply("mamae")
})

client.on("message", msg => {
  if (msg.content.includes("Marisa")){
    msg.reply("MARISA")
  }
})

client.on("message", msg => {
  if (calorClaudio.some(gc => msg.content.includes(gc)))
    msg.reply("VAI TOMAR NO CU GUSTAVO CLAUDIO :middle_finger:")
})


client.on("message", msg => {
  if (serjoTomari.some(serjo => msg.content.includes(serjo)))
    msg.reply("VAI TOMAR NO CU SERJO :middle_finger:")
})

client.on("message", msg => {
  if (salimzeraChang.some(salim => msg.content.includes(salim)))
    msg.reply("DESBLOQUEIA O TELEGRAM :u7981:")
})

client.on("message", msg => { 
  if (msg.content.includes("+p")) {
    msg.reply("canta bolinha" )
  }
})

client.on("message", msg => { 
  if (msg.content === "Bom dia Vina") {
    msg.reply("Bom dia Familia e o Over")
  }
})

client.on("message", msg => { 
  if (msg.content === "bom dia vina") {
    msg.reply("Bom dia Familia e o Over")
  }
})

client.on("message", msg => { 
  if (msg.content === "Boa noite Vina") {
    msg.reply("Boa noite Familia e o Narga")
  }
})

client.on("message", msg => { 
  if (msg.content === "boa noite vina") {
    msg.reply("Boa noite Familia e o Narga")
  }
})

client.on("message", msg => { 
  if (msg.content === "mona lisa") {
    msg.reply("MONA LIIISA")
  }
})


client.on("message", msg => { 
  if (msg.content === "MONA LIIISA") {
    msg.reply("MONA LISAAA")
  }
})


VinaAlive ()
client.login(process.env.TOKEN)



