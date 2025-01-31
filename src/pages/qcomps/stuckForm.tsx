import { SetStateAction, useState } from "react";

/**
 * The form retrives first name and last name inputs and display them
 */
export default function Form() {
  /**
   * state for first name
   */
  const [firstName, setFirstName] = useState("");
  /**
   * state for last name
   */
  const [lastName, setLastName] = useState("");

  /**
   * updates first name when input value changes
   * @param e  value change event
   */
  function handleFirstNameChange(e: {
    target: { value: SetStateAction<string> };
  }) {
    setFirstName(e.target.value);
  }

  /**
   * updates last name when input value changes
   * @param e value change event
   */
  function handleLastNameChange(e: {
    target: { value: SetStateAction<string> };
  }) {
    setLastName(e.target.value);
  }

  /**
   * reset the first name and last name inputs to be empty
   */
  function handleReset() {
    setFirstName("");
    setLastName("");
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Hi, {firstName} {lastName}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
