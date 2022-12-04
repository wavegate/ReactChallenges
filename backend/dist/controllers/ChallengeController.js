"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Challenge_1 = __importDefault(require("../models/Challenge"));
const ChallengeController = {
    postChallenge: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield Challenge_1.default.create({
            name: "Simple Form",
            rank: "Bronze",
            requirements: [
                "User fills in username and password and that information is alerted when user clicks submit",
            ],
        });
        const challenges = yield Challenge_1.default.find({});
        return res.json({ challenges: challenges });
    }),
    getChallenges: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const challenges = yield Challenge_1.default.find({});
        return res.json({ challenges: challenges });
    }),
    putChallenge: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { _id, data } = req.body;
        yield Challenge_1.default.findOneAndUpdate({ _id: _id }, { data }, { new: true });
        const challenges = yield Challenge_1.default.find({});
        return res.json({ challenges: challenges });
    }),
    deleteChallenge: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { _id } = req.body;
        yield Challenge_1.default.findOneAndDelete({ _id: _id });
        const challenges = yield Challenge_1.default.find({});
        return res.json({ challenges: challenges });
    }),
};
exports.default = ChallengeController;
