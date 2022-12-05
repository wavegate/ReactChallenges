import { useEffect, useState } from "react";
import Challenge from "../components/Challenge";
import useFetch from "../hooks/useFetch";
import { Dialog, Listbox } from "@headlessui/react";
import { Controller, useController, useForm } from "react-hook-form";

export type ChallengeType = {
  name: string;
  rank: string;
  requirements: string[];
  submissions: string[];
  comments: object[];
  _id: string;
};

const Challenges = () => {
  const [challengesResult, challengesError, challengesLoaded, challengesFetch] =
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

  let [isOpen, setIsOpen] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const ranks = [
    "Bronze",
    "Silver",
    "Gold",
    "Platinum",
    "Diamond",
    "Master",
    "Grandmaster",
  ];

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex flex-col mt-6">
        <div>
          {challengesLoaded ? (
            challengesResult.challenges.map((challenge: ChallengeType) => {
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
        <button
          className="border border-black p-2 rounded w-fit hover:bg-black hover:cursor-pointer hover:text-white"
          onClick={() => setIsOpen(true)}
        >
          Add new challenge
        </button>
        <button
          className="border border-black p-2 rounded w-fit hover:bg-black hover:cursor-pointer hover:text-white"
          onClick={createChallenge}
        >
          Create Challenge
        </button>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
            <Dialog.Title>Create challenge</Dialog.Title>
            <Dialog.Description>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input type="text" {...register("name")} />
                <Controller
                  control={control}
                  name="rank"
                  defaultValue={ranks[0]}
                  render={({ field: { value, onChange } }) => {
                    return (
                      <Listbox value={value} onChange={onChange}>
                        <Listbox.Label>Rank:</Listbox.Label>
                        <Listbox.Button>{value}</Listbox.Button>
                        <Listbox.Options>
                          {ranks.map((rank, rankIndex) => (
                            <Listbox.Option key={rankIndex} value={rank}>
                              {rank}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Listbox>
                    );
                  }}
                />
              </form>
            </Dialog.Description>

            <button onClick={() => setIsOpen(false)}>Deactivate</button>
            <button onClick={() => setIsOpen(false)}>Cancel</button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default Challenges;
