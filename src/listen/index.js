import { getCommand } from "../register/get";

export let listenConsole = async (config) => {

    let send = config ? 
        config.customLogger ? config.customLogger : console.log 
    : console.log

    let y = process.openStdin()

    y.addListener("data", res => {
        let x = res.toString().trim().split(/ +/g)
        let message = x.join(" ")

        let data = getCommand(message)
        if(!data) return send("This command does not exist ! Please try again")

        let json = data.toJson()

        let request = {
            executor: message,
            reply: send
        }

        if(json.message) send(json.message)
        if(json.callback) json.callback(request)
    });

    return { success: true }
}