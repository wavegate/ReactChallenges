import { Request, Response } from "express";
import Challenge from "../models/Challenge";

const ChallengeController = {
  postChallenge: async (req: Request, res: Response) => {
    await Challenge.create({
      name: "Simple Form",
      rank: "Bronze",
      requirements: [
        "User fills in username and password and that information is alerted when user clicks submit",
      ],
    });
    const challenges = await Challenge.find({});
    return res.json({ challenges: challenges });
  },
  getChallenges: async (req: Request, res: Response) => {
    const challenges = await Challenge.find({});
    return res.json({ challenges: challenges });
  },
  putChallenge: async (req: Request, res: Response) => {
    const { _id, data } = req.body;
    await Challenge.findOneAndUpdate({ _id: _id }, { data }, { new: true });
    const challenges = await Challenge.find({});
    return res.json({ challenges: challenges });
  },
  deleteChallenge: async (req: Request, res: Response) => {
    const { _id } = req.body;
    await Challenge.findOneAndDelete({ _id: _id });
    const challenges = await Challenge.find({});
    return res.json({ challenges: challenges });
  },
};

export default ChallengeController;
