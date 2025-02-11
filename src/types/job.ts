export interface Salary {
    currency: string;
    minimum: string;
    maximum: string;
    interval: string;
}

export interface Job {
    jobId: string;
    jobTitle: string;
    experience: string;
    employmentType: string;
    location: string;
    jobType: string;
    company: string;
    salary: Salary;
    jobDescription: string;
    totalCandidates: number;
    totalInterviewsTaken: number;
    totalShortlisted: number;
    totalRejectedTaken: number;
    postedDate: string;
    updatedDate: string;
    jobStatus: string;
    interviewStatus: 'CREATED' | 'NOT_CREATED';
}

