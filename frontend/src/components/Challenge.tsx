import useFetch from "../hooks/useFetch";
import { ChallengeType } from "../pages/Challenges";

const Challenge = ({
  challenge,
  deleteChallenge,
}: {
  challenge: ChallengeType;
  deleteChallenge: Function;
}) => {
  return (
    <div>
      <h3 className="text-lg">{challenge.name}</h3>
      <div>{challenge.rank}</div>
      <div>{challenge.requirements}</div>
      <div>{challenge.submissions}</div>
      <div>{JSON.stringify(challenge.comments)}</div>
      <button
        className="border border-black p-2 rounded hover:bg-black hover:cursor-pointer hover:text-white"
        onClick={() => deleteChallenge(challenge._id)}
      >
        Delete Challenge
      </button>
    </div>
  );
};

export default Challenge;
