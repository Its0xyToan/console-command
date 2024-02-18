const { Command, listenConsole, registerCommand, registerCommands } = require("../build/index.js");

const command = new Command()
    .setExecutor("a")
    .setMessage("Message of testing")
    .setCallback((req) => {
        return req.reply("Callback of testing")
    })

const command2 = new Command()
    .setExecutor("testing2")
    .setMessage("Message of testing2")
    .setCallback((req) => {
        return req.reply("aaaaaaaaaaaaaaaaaaaa")
    })

registerCommands(command, command2)

function logger(...args) {
    console.log(...args)
}

listenConsole({ customLogger: logger }).then(() => console.log("ConsoleCommand listening for commands !"))