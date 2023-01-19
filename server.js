const h = require('http');

const fs = require('fs');

const m = require('minimist');

const arguments = m(process.argv.slice(2));

const port = arguments.port || 3000;

const data = fs.readFile('./public/index.html', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const server = h.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    });

    server.listen(port, () => {
        console.log(`Server is running at port ${port}`);
    });
});