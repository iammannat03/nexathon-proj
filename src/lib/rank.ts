"use server";

type Candidate = {
  id: string;
  name: string;
  dimensions: Record<string, number>;
  pastInterviews: { score: number }[];
};

// sample data:
// [
//     { id: "1", name: "Alice", dimensions: { skill: 8, leadership: 7 }, pastInterviews: [{ score: 9 }, { score: 8 }] },
//     { id: "2", name: "Bob", dimensions: { skill: 7, leadership: 6 }, pastInterviews: [{ score: 7 }, { score: 7 }] },
//     { id: "3", name: "Charlie", dimensions: { skill: 9, leadership: 8 }, pastInterviews: [{ score: 10 }, { score: 9 }] },
// ]

export async function rankCandidates(candidates: Candidate[]): Promise<string[]> {
  if (!Array.isArray(candidates)) {
    throw new Error("Invalid data format");
  }

  return candidates
    .map((candidate) => {
      let avgInterviewScore =
        candidate.pastInterviews.reduce((sum, p) => sum + p.score, 0) /
        candidate.pastInterviews.length || 0;

      let totalDimensionScore =
        Object.values(candidate.dimensions).reduce((sum, val) => sum + val, 0) /
        Object.values(candidate.dimensions).length || 0;

      let rankingScore = avgInterviewScore * 0.4 + totalDimensionScore * 0.6;

      return { id: candidate.id, rankingScore };
    })
    .sort((a, b) => b.rankingScore - a.rankingScore)
    .map((c) => c.id);
}
