var express = require('express');
var router = express.Router();

// Require controller modules
var message_controller = require('../controllers/messageController');

// ----- ROUTES -----

// Get homepage - redirects to '/site'
// messageController will define GET index further
// index.js -> site.js -> messageController.js
router.get('/', message_controller.index);

// GET request for creating a message (you GET the form)
// index.pug -> site.js -> messageController.js
router.get('/form', message_controller.message_create_get);

// POST request for creating Message
// site.js -> messageController.js
router.post('/form', message_controller.message_create_post);

module.exports = router;