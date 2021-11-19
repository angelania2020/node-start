const path = require('path')

// https://nodejs.org/dist/latest-v16.x/docs/api/path.html

console.log(__filename)  // C:\Users\Angelina\Documents\PROGRAMMING\node-start\refs\path_ref.js

// Returns the last portion of a path:
console.log(path.basename(__filename))  // path_ref.js

// Returns the directory name of a path:
console.log(path.dirname(__filename))  // C:\Users\Angelina\Documents\PROGRAMMING\node-start\refs

// Returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last portion of the path:
console.log(path.extname(__filename))  // .js

console.log(path.parse(__filename))
// Returns an object whose properties represent significant elements of the path:
// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\Angelina\\Documents\\PROGRAMMING\\node-start\\refs',
//     base: 'path_ref.js',
//     ext: '.js',
//     name: 'path_ref'
//   }

// Joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path:
console.log(path.join(__dirname, 'test', 'second.html'))  // C:\Users\Angelina\Documents\PROGRAMMING\node-start\refs\test\second.html

// Resolves a sequence of paths or path segments into an absolute path:
console.log(path.resolve(__dirname, './test', '/second.html'))  // C:\second.html
