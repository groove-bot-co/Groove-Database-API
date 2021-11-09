const { Schema, model } = require('mongoose');

const timeEventSchema = Schema({
	userID: String, // returns us the user id of a user
	guildID: String, // returns the guilds id 
	type: String,
	time: String, // the time stamp
	channelID: String, // tell us the channel id 
	message: String, // returns the message pretty obvious 
});

module.exports = model('timedEvents', timeEventSchema);
