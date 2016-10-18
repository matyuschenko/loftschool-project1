var mongoose = require('mongoose');
var express = require('express');
var app = express();

app.set('json spaces', 2);

mongoose.connect('mongodb://localhost/test');
var Message = mongoose.model('messages', {
    content: String
});

app.get('/submitform', function (req, res) {
    var message = new Message(JSON.stringify(req.query));
    message.save(function (err) {
        if (err) {
            res.send('error: ', err)
        } else {
            res.send('success!')
        }
    });
});

app.get('/showMessages', function (req, res) {
    Message.find(function (err, messages) {
        if (err) {
            res.send(err)
        } else {
            res.json(messages)
        }
    })
});

app.get('/delMessages', function (req, res) {
    Message.remove({}, function () {
        res.send('Messages deleted!');
    });
});

app.use(express.static('build'));

app.listen(3000);