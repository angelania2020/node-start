const http = require('http')
const fs = require('fs')

fs.readFile('assets/img/forest.jpg', function (err, data) {
    if (err) throw err;

    const server = http.createServer((req, res) => {

        console.log(req.url)

        res.write('<h1 style="background-color:MediumSeaGreen; text-align:center; text-transform: capitalize;">The web-server is active!</h1>')
        res.write('<div style="border:1px solid gray; padding: 1em;">')
        res.write('<h2 style="text-align: center; color: MediumSeaGreen;">Node.js presents...</h2>')
        res.write('<p style="text-indent: 50px; text-align: justify; letter-spacing: 1px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>')
        res.write('<img src="data:image/jpeg;base64,')
        res.write(Buffer.from(data).toString('base64'));
        res.write('" style="padding: 5px; display: block; margin-left: auto; margin-right: auto; border: 1px solid #ddd; border-radius: 4px;" alt="Mountain" width="38%">');
        res.end(`</div>`)

    })

    server.listen(3000, () => {
        console.log('Server is running...')
    })

})
