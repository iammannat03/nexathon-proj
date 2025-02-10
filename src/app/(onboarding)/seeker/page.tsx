import { QuestionCarousel } from "@/components/onboarding/question-carousel";

export default function SeekerOnboarding() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        Let's personalize your experience
      </h1>
      <QuestionCarousel />
    </div>
  );
}
