// http - 80
// https - 443

var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    typeMime = {
        '.html': 'text/html',
        '.htm': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg'
    },
    BUILD = 'build/';


http.createServer(function (req, res) {
    var _url = url.parse(req.url),
        filename = _url.pathname.substring(1),
        extname,
        type,
        img;

    if (_url.pathname === '/') {
        filename = 'index.html';
    }

    filename = BUILD + filename;

    extname = path.extname(filename);
    type = typeMime[path.extname(filename)];

    if ((extname === '.png') || (extname === '.jpg')) {
        img = fs.readFileSync(filename);
        res.writeHead(200, {
            'Content-Type': type
        });
        res.write(img, 'hex');
        res.end();
    } else if ((extname === '.woff2') || (extname === '.woff') || (extname === '.ttf') || (extname === '.eot') || (extname === '.otf')) {
        font = fs.readFileSync(filename);
        res.writeHead(200, {
          'Content-Type': type
        });
        res.write(font, 'binary');
        res.end();
  } else {
        fs.readFile(filename, 'utf8', function (err, content) {
            if (err) {
                res.writeHead(404, {
                    'Content-Type': 'text/plain; charset=utf-8'
                });
                res.write(err.message);
                res.end();
            } else {
                res.writeHead(200, {
                    'Content-Type': type
                });
                res.write(content);
                res.end();
            }
        })
    }
}).listen(8080);