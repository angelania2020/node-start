const fs = require('fs')
const path = require('path')

// Asynchronously creates a directory:
fs.mkdir(path.join(__dirname, 'test'), err => {
    if (err) throw err
    console.log('Папка была создана')
})

// Asynchronously writes data to the file, replacing the file if it already exists
fs.writeFile(
    path.join(__dirname, 'test', 'test.txt'),
    'SKTVp20',
    (err) => {
        if (err) throw err
        console.log('Файл был создан')

        // Asynchronously append data to a file, creating the file if it does not yet exist:
        fs.appendFile(
            path.join(__dirname, 'test', 'test.txt'),
            ' 2021',
            err => {
                if (err) throw err
                console.log('Файл был изменен')
            }
        )
    }
)

// Asynchronously rename file at oldPath to the pathname provided as newPath:
// In the case that newPath already exists, it will be overwritten.
// fs.rename(
//     path.join(__dirname, 'test', 'test.txt'),
//     path.join(__dirname, 'test', 'fs_test.txt'),
//     err => {
//         if (err) throw err
//         console.log('Файл переименован')
//     }
// )