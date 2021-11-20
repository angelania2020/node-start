const os = require('os')

// Платформа
console.log(os.platform())  // win32

// Архитектура
console.log(os.arch())  // x64

// Информация
// Returns an array of objects containing information about each logical CPU core:
console.log(os.cpus())

// Свободная память (in bytes)
console.log(os.freemem())

// Сколько всего памяти (in bytes)
console.log(os.totalmem())

// Корневая директория
console.log(os.homedir())  // C:\Users\Angelina

// Сколько система работает (in number of seconds)
console.log(os.uptime())