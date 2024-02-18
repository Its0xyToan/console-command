const { Command, listenConsole, registerCommand } = require("../index.cjs");

const command = new Command()
    .setExecutor("testing")
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

registerCommand(command)
registerCommand(command2)


listenConsole()