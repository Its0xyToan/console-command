
const CommandsMap = new Map();

export let add = (data) => {
    let json = data.toJson()
    CommandsMap.set(json.executor, data)
}

export let get = (s) => {
    return CommandsMap.get(s)
}