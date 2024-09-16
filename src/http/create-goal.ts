interface CreateGoalRequest {
  title: string;
  desiredWeeklyFrequency: number;
}

export async function createGoal({
  title,
  desiredWeeklyFrequency,
}: CreateGoalRequest) {
  await fetch("https://nlw-pocket-backend-v73l.onrender.com/goals", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title,
      desiredWeeklyFrequency,
    }),
  });
}
