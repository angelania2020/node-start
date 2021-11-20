const EventEmitter = require('events')

class Logger extends EventEmitter {
    log(message) {
        // Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.
        // The static Date.now() method returns the number of milliseconds elapsed since January 1, 1970.
        this.emit('message', `${message} ${Date.now()}`)
    }
}

const logger = new Logger()

// Adds the listener function to the end of the listeners array for the event named eventName.
// No checks are made to see if the listener has already been added.
// Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times.
logger.on('message', data => {
    console.log(data)  // Вывод сообщений в консоль
})


logger.log('First')
logger.log('Second')
logger.log('Third')
