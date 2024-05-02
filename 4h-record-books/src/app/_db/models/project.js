const mongoose = require("mongoose");

export const projectModel = new mongoose.Schema({
    name: String,
    description: String,
    shortDescription: String,
    year: String,
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
});

export const Project = mongoose.models.projects ||  mongoose.model("projects", projectModel);
