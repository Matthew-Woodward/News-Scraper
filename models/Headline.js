let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let HeadlineSchema = new Schema({
	headline: {
		type: String,
		unique: true
	},
	summary: {
		type: String
	},
	link: {
		type: String
	},
	photo: {
		type: String
	},
	date: {
		type: Date
	},
	saved: {
		type: Boolean,
		default: false
	},
	note: [
		{
			type: Schema.Types.ObjectId,
			ref: "Note"
		}
	]
});

let Headline = mongoose.model("Headline", HeadlineSchema);

module.exports = Headline;