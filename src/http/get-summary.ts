type SummaryResponse = {
  completed: number;
  total: number;
  goalsPerDay: Record<
    string,
    {
      id: string;
      title: string;
      completedAt: string;
    }[]
  >;
};

export async function getSummary(): Promise<SummaryResponse> {
  const response = await fetch(
    "https://nlw-pocket-backend-gfrs.onrender.com/summary"
  );
  const data = await response.json();

  return data.summary;
}
