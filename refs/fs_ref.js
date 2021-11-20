const fs = require('fs')
const path = require('path')

// File System

// Asynchronously creates a directory:
fs.mkdir(path.join(__dirname, 'notes'), err => {
    if (err) throw err
    console.log('Папка была создана')
})

// Asynchronously writes data to the file, replacing the file if it already exists
fs.writeFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    'Hello world',
    (err) => {
        if (err) throw err
        console.log('Файл был создан')

        // Asynchronously append data to a file, creating the file if it does not yet exist:
        fs.appendFile(
            path.join(__dirname, 'notes', 'mynotes.txt'),
            ' From append file',
            err => {
                if (err) throw err
                console.log('Файл был изменен')

                // Asynchronously reads the entire contents of a file:
                fs.readFile(
                    path.join(__dirname, 'notes', 'mynotes.txt'),
                    'utf-8',
                    (err, data) => {
                        if (err) throw err
                        console.log(data)
                    }
                )
            }
        )
    }
)

// Asynchronously rename file at oldPath to the pathname provided as newPath:
// In the case that newPath already exists, it will be overwritten.
// fs.rename(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     path.join(__dirname, 'notes', 'notes.txt'),
//     err => {
//         if (err) throw err
//         console.log('Файл переименован')
//     }
// )

