import { Command } from "../constructors/CCommand"
import { add } from "./store"

/**
 * Registers a new command
 * @param {Command} command 
 */
export let registerCommand = (command) => {
    if(!command.toJson().executor) throw new Error("An executor is required for registering a command !")
    add(command)
}

/**
 * Registers multiple commands
 * @param {Command[]} commands 
 */
export let registerCommands = (...commands) => {
    for(let command of commands) {
        registerCommand(command)
    }
}