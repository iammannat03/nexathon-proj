import { INTERVIEW_STATUS } from "@/lib/enums";

export interface Candidate {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    resumeLink: string;
}

export interface CandidateDetails {
    profileImg: string;
    candidateId: string;
    candidateName: string;
    status: string;
    aiRank: string;
    appliedDate: string;
    interviewStatus: INTERVIEW_STATUS;
    invited: boolean;
    interview: Interview;
}

export interface Interview {
    invitedDate: string;
    reInviteDate: string;
    takenDate: string;
    reportGenerated: string;
    reportLink: string;
    evaluation: Evaluation;
}

export interface Evaluation {
    dimensions: string[];
    score: number;
}
