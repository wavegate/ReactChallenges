import ChallengeController from "../controllers/ChallengeController";
import express from "express";

const ChallengeRouter = express.Router();

ChallengeRouter.get("/", ChallengeController.getChallenges);
ChallengeRouter.post("/", ChallengeController.postChallenge);
ChallengeRouter.put("/", ChallengeController.putChallenge);
ChallengeRouter.delete("/", ChallengeController.deleteChallenge);

export default ChallengeRouter;
