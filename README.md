
# Console Command 🎆

The best package to create commands in the console !


## Installation 🚀

Install `console-command` with [npm](https://www.npmjs.com/package/console-command)

```bash
  npm install console-command
```


## Features ❓

- 🔄️ Callback when command is used 
- 📨 Message when command is used
- 🍔 Lightweight (around 270 lines in total, 3 files including index.d.ts)
- 🚀 Simple to use !
## Usage/Examples 🔨

```javascript
const Console = require("console-command");
// or
import * as Console from "console-command";

// Create a new command !
const my_command = new Console.Command()
    .setExecutor("your_executor can include spaces") // What you will need to send
    .setMessage("Message when command is executed") // What he will reply
    .setCallback((req) => { // Executed when command is used
        return req.reply("Callback of testing") // Just another name for console.log
    })

const my_command2 = ...

// Registering commands

Console.registerCommand(my_command) // You need to register all your commands or it will not work /!\
// Or if you have multiple commands:
Console.registerCommands(my_command, my_command2, ...)


// Listening the console

Console.listenConsole() // This will create a new listener
    .then(() => console.log("ConsoleCommand listening for commands !")) // On Ready

// Or with custom logger:

function logger(...args) {
    // handle logging
}

listenConsole({ customLogger: logger }) // customLogger is a Function !
    .then(() => console.log("ConsoleCommand listening for commands !")) // On ready
```

And that's it !


## Authors 🎈

- [@Its0xyToan](https://www.github.com/Its0xyToan)

Thanks for using this little package I made !

## Todo
* Custom Logger (console.log) 🟢
* Subcommands