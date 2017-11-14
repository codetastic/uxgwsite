var Message = require('../models/message');
var async = require('async');

// Display Homepage
// On GET, it renders index.pug and gives it the title
// site.js -> messageController.js
exports.index = function(req, res) {
    res.render('index', { title: 'Yannis Marcou'});
}

// Display Message create form on GET
// On GET, it renders form.pug and it gives it the title
// index.pug -> site.js -> messageController.js
exports.message_create_get = function(req, res, next) {
    res.render('form', {title: 'Send me a message'});
};

// Handle Message create on POST
// This is what happens when I POST the form info to the db
// site.js -> messageController.js
exports.message_create_post = function(req, res, next) {

    req.checkBody('sender_name', 'Please enter your name').notEmpty();
    req.checkBody('sender_email', 'Please enter your email').notEmpty();
    req.checkBody('sender_note', 'Please enter a note').notEmpty();

    req.sanitize('sender_name').escape();
    req.sanitize('sender_email').escape();
    req.sanitize('sender_note').escape();
    req.sanitize('sender_name').trim();
    req.sanitize('sender_email').trim();
    req.sanitize('sender_note').trim();

    var errors = req.validationErrors();

    // We create the new message
    var message = new Message(
        {sender_name: req.body.sender_name,
        sender_email: req.body.sender_email,
        sender_note: req.body.sender_note
    });

    if (errors) {
        res.render('form', { title: 'There has been an error', message: message, errors: errors});
    return;
    }
    else {
    // Data from form is valid
        message.save(function (err) {
            if (err) {return next(err);}
            // successful - redirect to thank you
            res.render('thankyou', {title: 'Thank you'});
        });
    }
};
