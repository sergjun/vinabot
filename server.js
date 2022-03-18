const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send("Vina Online")
})

function VinaAlive() {
  server.listen(3000, () => {
    console.log("Vina pronto")
  })
}

module.exports = VinaAlive