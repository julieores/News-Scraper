var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var ArticleSchema = new Schema({

    storyContent: {
        type: String,
        required: true
    },

    storyLink: {
        type: String,
        required: true
    },

    $0: {
        type: String,
        required: true

    },

    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});


var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;