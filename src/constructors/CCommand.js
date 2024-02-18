

export class Command {
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