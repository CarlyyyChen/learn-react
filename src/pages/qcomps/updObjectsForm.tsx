import { useState } from "react";

/**
 * mimics a scoreboard for a player
 */
export default function Scoreboard() {
  /**
   * state for player object
   */
  const [player, setPlayer] = useState({
    firstName: "John Woodrow",
    lastName: "Wilson",
    likescore: 10,
  });

  /**
   * increment likescore by 1 when clicked
   */
  function handlePlusClick() {
    setPlayer({ ...player, likescore: player.likescore + 1 });
  }

  /**
   * updates first name according to the input
   * @param e value change event
   */
  function handleFirstNameChange(e: { target: { value: string } }) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  /**
   * updates last name according to the input
   * @param e value change event
   */
  function handleLastNameChange(e: { target: { value: string } }) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }

  return (
    <>
      <label>
        Like Score: <b>{player.likescore}</b>
        {"  "}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        First name:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </>
  );
}
