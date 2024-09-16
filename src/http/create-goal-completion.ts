export async function createGoalCompletion(goalId: string) {
  await fetch("https://nlw-pocket-backend-v73l.onrender.com/completions", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      goalId,
    }),
  });
}
