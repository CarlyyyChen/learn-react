import { useState } from "react";

/**
 * Mimic the flow of buy - pending - finish pending and complete order
 */
export default function RequestTracker() {
  /**
   * state for pending count
   */
  const [pending, setPending] = useState(0);
  /**
   * state for completed order count
   */
  const [completed, setCompleted] = useState(0);

  /**
   * When Buy button is clicked once, pending count increment by 1
   * after 3 seconds, that pending order becomes completed
   * So pending count decrease by 1 and completed count increase by 1
   */
  async function handleClick() {
    setPending((pending) => pending + 1);
    await delay(3000);
    setPending((pending) => pending - 1);
    setCompleted((completed) => completed + 1);
  }

  return (
    <>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </>
  );
}

/**
 * function to delay for several miliseconds
 * @param ms miliseconds to delay
 * @returns a promise
 */
function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
