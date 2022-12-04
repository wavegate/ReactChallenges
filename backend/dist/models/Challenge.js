"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ChallengeSchema = new mongoose_1.Schema({
    name: { type: String },
    rank: {
        type: String,
        enum: [
            "Bronze",
            "Silver",
            "Gold",
            "Platinum",
            "Diamond",
            "Master",
            "Grandmaster",
        ],
    },
    requirements: [{ type: String }],
    submissions: [{ type: String }],
    comments: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Comment" }],
});
const Challenge = (0, mongoose_1.model)("Challenge", ChallengeSchema);
exports.default = Challenge;
