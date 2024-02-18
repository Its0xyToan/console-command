import { get } from "./store"

/**
 * Get the content of a command
 * @param {string} executor 
 */
export let getCommand = (executor) => {
    return get(executor)
}