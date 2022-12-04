import { Schema, model } from "mongoose";

const ChallengeSchema = new Schema({
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
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

const Challenge = model("Challenge", ChallengeSchema);

export default Challenge;
