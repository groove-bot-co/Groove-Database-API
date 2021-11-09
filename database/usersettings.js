const { Schema, model } = require('mongoose');

const userSchema = Schema({
    userID: String,
    premium: { type: Boolean, default: false }, //premuim users for groove
    premiumSince: String, // premium-only - custom rank background
    rankImage: Schema.Types.Buffer, // Will be used for the website (or DM's)
    Language: { type: String, default: 'en-US' },
    cmdBanned: { type: Boolean, default: false }, // If the user is banned from using commands or not
});

module.exports = model('Users', userSchema); 
