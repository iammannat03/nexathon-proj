import {ApiResponse} from '@/types/common';
import {Job} from '@/types/job';
import {Candidate, CandidateDetails} from '@/types/candidate';
import {fetchClient} from "@/lib/fetchClient";

type JobsResponse = ApiResponse<{ jobs: Job[] }>;
export const getAllJobs = async (): Promise<JobsResponse> => {
    try {
        return await fetchClient('/api/job/list');
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error fetching jobs:', error.message);
            throw error;
        } else {
            console.error('Unknown error occurred');
            throw new Error('An unknown error occurred');
        }
    }
};
// To Get Job Details of a Particular Job
export type JobDetails = Job & { candidates: CandidateDetails[] };

export const getJobDetails = async (jobId: string): Promise<ApiResponse<JobDetails>> => {
    try {
        return await fetchClient('/api/job/' + jobId);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error fetching job details:', error.message);
            throw error;
        } else {
            console.error('Unknown error occurred');
            throw new Error('An unknown error occurred');
        }
    }
};

export const addJob = async (job: Job): Promise<ApiResponse<Job>> => {
    try {
        return await fetchClient('/api/job/create', {
            method: 'POST',
            body: JSON.stringify(job),
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error adding job:', error.message);
            throw error;
        } else {
            console.error('Unknown error occurred');
            throw new Error('An unknown error occurred');
        }
    }
};
export const addCandidate = async (jobId: string, candidate: Candidate): Promise<ApiResponse<any>> => {
    try {
        const url = new URL(process.env.NEXT_PUBLIC_API_BASE + '/job/add-candidate');
        url.searchParams.append('job_id', jobId);
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmhpbmFuZGFuc2luZ2xhNDhAZ21haWwuY29tIiwiZXhwIjoxNzM0Mjg1MDc3fQ.nGIvmu9gPJ5cm5Ts0yTcDdffblHZbvVwdqBJUpfI86c',
            },
            body: JSON.stringify(candidate),
        });
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error response data:', errorData);
            throw new Error(
                `Failed to add candidate: ${errorData.message || 'Unknown error'}`,
            );
        }
        return await response.json();
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error adding candidate:', error.message);
            throw error;
        } else {
            console.error('Unknown error occurred');
            throw new Error('An unknown error occurred');
        }
    }
};