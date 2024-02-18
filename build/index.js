'use strict';

class Command {
    /** @type {Object} */
    data;

    /**
     * You can use the builder instead !
     * @param {Object?} dataAsJson 
     */
    constructor(dataAsJson) { this.data = dataAsJson ? dataAsJson : { executor: null, callback: null, message: null}; }

    /**
     * Sets the executor for this command
     * @param {string} executor 
     */
    setExecutor(executor) {
        this.data.executor = executor;
        return this
    }

    /**
     * Sets a function to be executed whenever this command is executed
     * @callback callback
     */
    setCallback(callback) {
        this.data.callback = callback;
        return this
    }

    /**
     * Sets the message to be sent when this command is executed
     * @param {string} message 
     */
    setMessage(message) { 
        this.data.message = message;
        return this
    }

    toJson() { return this.data }
}

const CommandsMap = new Map();

let add = (data) => {
    let json = data.toJson();
    CommandsMap.set(json.executor, data);
};

let get = (s) => {
    return CommandsMap.get(s)
};

/**
 * Registers a new command
 * @param {Command} command 
 */
let registerCommand = (command) => {
    if(!command.toJson().executor) throw new Error("An executor is required for registering a command !")
    add(command);
};

/**
 * Get the content of a command
 * @param {string} executor 
 */
let getCommand = (executor) => {
    return get(executor)
};

let listenConsole = async () => {
    let y = process.openStdin();
    y.addListener("data", res => {
        let x = res.toString().trim().split(/ +/g);
        let message = x.join(" ");
        let data = getCommand(message);
        if(!data) return console.error("This command does not exist ! Please try again")

        let json = data.toJson();

        let request = {
            executor: message,
            command: json,
            reply: console.log
        };

        if(json.message) console.log(json.message);
        if(json.callback) json.callback(request);
    });
};

exports.Command = Command;
exports.listenConsole = listenConsole;
exports.registerCommand = registerCommand;
