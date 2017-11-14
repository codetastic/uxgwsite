var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MessageSchema = Schema({
        sender_name: {type: String, required: true, max: 100},
        sender_email: {type: String, required: true, max: 200},
        sender_note: {type: String, required: true, max: 500},
    }
);

// Export model
module.exports = mongoose.model('Message', MessageSchema);