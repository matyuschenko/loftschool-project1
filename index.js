var mongoose = require('mongoose');
var express = require('express');
var app = express();

mongoose.connect('mongodb://localhost/test');
var Message = mongoose.model('messages', {
    content: String
});

app.get('/submitform', function (req, res) {
    var message = new Message(req.query);
    message.save(function (err) {
        if (err) {
            res.send('error: ', err)
        } else {
            console.log('Message saved: ', req.query)
            res.send('success!')
        }
    });
});

app.get('/showMessages', function (req, res) {
    Message.find(function (err, messages) {
        if (err) {
            res.send(err)
        } else {
            res.send(messages)
        }
    })
});

app.get('/delMessages', function (req, res) {
    Message.remove({}, function () {
        res.send('Messages deleted!');
        console.log('Messages deleted!');
    });
});

app.use(express.static('build'));

app.listen(3000);