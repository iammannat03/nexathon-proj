"use server";

type Candidate = {
  id: string;
  name: string;
  dimensions: Record<string, number>;
  pastInterviews: { score: number }[];
};

// sample data:

export async function rankCandidates(
  candidates: Candidate[],
): Promise<string[]> {
  if (!Array.isArray(candidates)) {
    throw new Error("Invalid data format");
  }

  return candidates
    .map((candidate) => {
      let avgInterviewScore =
        candidate.pastInterviews.reduce(
          (sum, p) => sum + p.score,
          0,
        ) / candidate.pastInterviews.length || 0;

      let totalDimensionScore =
        Object.values(candidate.dimensions).reduce(
          (sum, val) => sum + val,
          0,
        ) / Object.values(candidate.dimensions).length || 0;

      let rankingScore =
        avgInterviewScore * 0.4 + totalDimensionScore * 0.6;

      return { id: candidate.id, rankingScore };
    })
    .sort((a, b) => b.rankingScore - a.rankingScore)
    .map((c) => c.id);
}
