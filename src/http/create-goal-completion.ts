export async function createGoalCompletion(goalId: string) {
  await fetch("https://nlw-pocket-backend-gfrs.onrender.com/completions", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      goalId,
    }),
  });
}
