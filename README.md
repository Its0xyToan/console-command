
# Console Command 🎆

The best package to create commands in the console !


## Installation 🚀

Install `console-command` with [npm](https://npmjs.com)

```bash
  npm install console-command
```


## Features ❓

- 🔄️ Callback when command is used 
- 📨 Message when command is used
- 🍔 Lightweight (aroud 270 lines in total, 3 files including index.d.ts)
- 🚀 Simple to use !
## Usage/Examples 🔨

```javascript
const Console = require("console-command");

// Create a new command !
const my_command = new Console.Command()
    .setExecutor("your_executor can include spaces") // What you will need to send
    .setMessage("Message when command is executed") // What he will reply
    .setCallback((req) => { // Executed when command is used
        return req.reply("Callback of testing") // Just another name for console.log
    })

Console.registerCommand(my_command) // You need to register all your commands or it will not work /!\

Console.listenConsole() // This will create a new listener
```

And that's it !


## Authors 🎈

- [@Its0xyToan](https://www.github.com/Its0xyToan)

Thanks for using this little package I made !