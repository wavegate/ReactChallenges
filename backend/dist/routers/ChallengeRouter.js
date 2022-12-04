"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ChallengeController_1 = __importDefault(require("../controllers/ChallengeController"));
const express_1 = __importDefault(require("express"));
const ChallengeRouter = express_1.default.Router();
ChallengeRouter.get("/", ChallengeController_1.default.getChallenges);
ChallengeRouter.post("/", ChallengeController_1.default.postChallenge);
ChallengeRouter.put("/", ChallengeController_1.default.putChallenge);
ChallengeRouter.delete("/", ChallengeController_1.default.deleteChallenge);
exports.default = ChallengeRouter;
