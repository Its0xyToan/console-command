interface request {
    executor: string,
    reply: Function
}

/**
 * Represents a command.
 */
declare class Command {
    /** Data associated with the command. */
    data: {
        /** Executor of the command. */
        executor: string;
        /** Callback function to be executed when the command is invoked. */
        callback: (req: Request) => void | null;
        /** Message to be sent when the command is executed. */
        message: string | null;
    };

    /**
     * Constructs a new Command.
     * @param {Object} [dataAsJson] - Data to initialize the command with.
     */
    constructor(dataAsJson?: {
        executor?: string | null;
        callback?: Function | null;
        message?: string | null;
    });

    /**
     * Sets the executor for this command.
     * @param {string} executor - Executor to be set.
     * @returns {Command} The updated Command instance.
     */
    setExecutor(executor: string): this;

    /**
     * Sets the callback function for this command.
     * @param {Function} callback - Callback function to be set.
     * @returns {Command} The updated Command instance.
     */
    setCallback(callback: Function): this;

    /**
     * Sets the message for this command.
     * @param {string} message - Message to be set.
     * @returns {Command} The updated Command instance.
     */
    setMessage(message: string): this;

    /**
     * Converts the command to JSON format.
     * @returns {Object} JSON representation of the command.
     */
    toJson(): {
        executor: string;
        callback: Function | null;
        message: string | null;
    };
}

/**
 * Registers a new command.
 * @param {Command} command - The command to register.
 */
declare function registerCommand(command: Command): void;

/**
 * Listens for console input and executes corresponding commands.
 * @returns {Promise<void>} A Promise that resolves when console listening is initiated.
 */
declare function listenConsole(): Promise<void>;

export { Command, listenConsole, registerCommand };