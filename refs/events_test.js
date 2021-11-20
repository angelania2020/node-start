const EventEmitter = require('events')

class DTLogger extends EventEmitter {
    log(message) {
        var today = new Date();
        var date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + today.getMilliseconds();
        var dateTime = date + ' ' + time;
        this.emit('message', `${message} ${dateTime}`)
    }
}

const logger = new DTLogger()


logger.on('message', data => {
    console.log(data)  // Вывод сообщений в консоль
})


logger.log('1.')
logger.log('2.')
logger.log('3.')
logger.log('4.')
logger.log('5.')
