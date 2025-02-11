import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function JobReadinessDialog({
  jobId,
}: {
  jobId: string;
}) {
  const router = useRouter();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          Prepare for this role
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Assess Your Readiness</DialogTitle>
          <DialogDescription>
            We&apos;ll take you through a short quiz to
            assess your readiness for this role and provide
            personalized recommendations.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
          <Button
            onClick={() =>
              router.push(`/seeker/quiz?jobId=${jobId}`)
            }
          >
            Continue to Quiz
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
