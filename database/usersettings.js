const { Schema, model } = require('mongoose');

const userSchema = Schema({
	userID: String,
	premium: { type: Boolean, default: false }, 
	premiumSince: String, 
	rankImage: Schema.Types.Buffer, 
	Language: { type: String, default: 'en-US' },
	cmdBanned: { type: Boolean, default: false }, 
});

module.exports = model('Users', userSchema);
