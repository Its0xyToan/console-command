import { getCommand } from "../register/get";

export let listenConsole = async () => {
    let y = process.openStdin()
    y.addListener("data", res => {
        let x = res.toString().trim().split(/ +/g)
        let message = x.join(" ")
        let data = getCommand(message)
        if(!data) return console.error("This command does not exist ! Please try again")

        let json = data.toJson()

        let request = {
            executor: message,
            command: json,
            reply: console.log
        }

        if(json.message) console.log(json.message)
        if(json.callback) json.callback(request)
    });
}