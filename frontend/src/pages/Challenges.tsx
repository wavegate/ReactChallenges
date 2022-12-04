import { useEffect, useState } from "react";
import Challenge from "../components/Challenge";
import useFetch from "../hooks/useFetch";
import { Dialog } from "@headlessui/react";

export type ChallengeType = {
  name: string;
  rank: string;
  requirements: string[];
  submissions: string[];
  comments: object[];
  _id: string;
};

const Challenges = () => {
  const [challenges, challengesError, challengesLoaded, challengesFetch] =
    useFetch("http://localhost:5000/challenges");

  useEffect(() => {
    challengesFetch("GET");
  }, []);

  const createChallenge = () => {
    challengesFetch("POST", {});
  };

  const deleteChallenge = (_id: string) => {
    challengesFetch("DELETE", { _id: _id });
  };

  let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-col mt-6">
        <div>
          {challengesLoaded ? (
            challenges.challenges.map((challenge: ChallengeType) => {
              return (
                <Challenge
                  challenge={challenge}
                  deleteChallenge={deleteChallenge}
                />
              );
            })
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div className="text-red-700">{challengesError}</div>
        <button onClick={() => setIsOpen(true)}>Add new challenge</button>
        <button
          className="border border-black p-2 rounded hover:bg-black hover:cursor-pointer hover:text-white"
          onClick={createChallenge}
        >
          Create Challenge
        </button>
      </div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button onClick={() => setIsOpen(false)}>Deactivate</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Challenges;
