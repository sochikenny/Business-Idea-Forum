const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  body: String,
  date: { type: Date, default: Date.now }
});

const Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;