import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { createGoalCompletion } from "../http/create-goal-completion";
import { getPendingGoals } from "../http/get-pending-goals";
import { OutlineButton } from "./ui/outline-button";

export function PendingGoals() {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["pending-goals"],
    queryFn: getPendingGoals,
  });

  if (!data) {
    return null;
  }

  async function handleCompleteGoal(goalId: string) {
    await createGoalCompletion(goalId);

    queryClient.invalidateQueries({ queryKey: ["summary"] });
    queryClient.invalidateQueries({ queryKey: ["pending-goals"] });
  }

  return (
    <div className="flex flex-wrap gap-3">
      {data.map((goal) => {
        return (
          <OutlineButton
            key={goal.id}
            disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
            onClick={() => handleCompleteGoal(goal.id)}
          >
            <Plus />
            {goal.title}
          </OutlineButton>
        );
      })}
    </div>
  );
}
