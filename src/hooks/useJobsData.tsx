'use client'
import React from "react";
import {Job} from "@/types/job";
import {Candidate} from "@/types/candidate";
import {addJob as addJobAPI, getAllJobs} from "@/services/api";

interface JobContextType {
    jobs: Job[];
    loading: boolean;
    error: string | null;
    fetchJobs: () => Promise<void>;
    addJob: (job: Job) => Promise<void>;
    getJobDetails: (jobId: string) => Promise<void>;
    addCandidate: (jobId: string, candidate: Candidate) => Promise<void>;
}

const JobContext = React.createContext<JobContextType | undefined>(undefined);

const JobFetchingState = {
    IDLE: 'IDLE',
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
};

export const JobProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [jobs, setJobs] = React.useState<Job[]>([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const fetchJobs = async () => {
        console.log("fetching jobs")
        try {
            setLoading(true);
            const response = await getAllJobs();
            setJobs(response.data.jobs);
        } catch (error: unknown) {
            alert('Error fetching jobs');
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unknown error occurred');
            }
        } finally {
            setLoading(false);
        }
    };

    const getJobDetails = async (jobId: string) => {
        // Implement the logic to get job details
    };

    const addCandidate = async (jobId: string, candidate: Candidate) => {
        // Implement the logic to add a candidate to a job
    };

    const addJob = async (job: Job) => {
        try {
            setLoading(true)
            await addJobAPI(job);
            setJobs([...jobs, job]);
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message || "Some Error Occurred");
            } else {
                setError("Some Error Occurred");
            }
        } finally {
            setLoading(false);
        }
    }


    return (
        <JobContext.Provider value={{jobs, loading, error, addJob, fetchJobs, getJobDetails, addCandidate}}>
            {children}
        </JobContext.Provider>
    );
}

export const useJobsData = () => {
    const context = React.useContext(JobContext);
    if (!context) {
        throw new Error('useJobData must be used within a JobProvider');
    }
    return context;
}