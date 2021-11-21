const http = require('http')  // To use the HTTP server
const path = require('path')
const fs = require('fs')

// Create a local server to receive data from
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        // Sends a response header to the request. The status code is a 3-digit HTTP status code, like 404.
        // The last argument, headers, are the response headers.
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        if (req.url === '/') {
            fs.readFile(
                path.join(__dirname, 'views', 'index.html'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        throw err
                    }
                    // This method signals to the server that all of the response headers and body have been sent;
                    // that server should consider this message complete.
                    // The method, response.end(), MUST be called on each response.
                    res.end(content)
                }
            )
        } else if (req.url === '/about') {
            fs.readFile(
                path.join(__dirname, 'views', 'about.html'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        throw err
                    }

                    res.end(content)
                }
            )
        } else if (req.url === '/shop') {
            fs.readFile(
                path.join(__dirname, 'views', 'shop.html'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        throw err
                    }

                    res.end(content)
                }
            )
        } else if (req.url === '/api/users') {
            res.writeHead(200, {
                'Content-Type': 'text/json'
            })

            const users = [
                { name: 'Vasya', age: 20 },
                { name: 'Elena', age: 23 }
            ]

            res.end(JSON.stringify(users))
        }
    } else if (req.method === 'POST') {
        const body = []
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        req.on('data', data => {
            // Copies the passed buffer data onto a new Buffer instance.
            body.push(Buffer.from(data))
        })

        req.on('end', () => {
            const message = body.toString().split('=')[1]

            res.end(`
                <h1>Ваше сообщение: ${message}</h1>
            `)
        })
    }
})

server.listen(3000, () => {
    console.log('Server is running...')
})